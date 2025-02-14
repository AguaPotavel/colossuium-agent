import { Action, IAgentRuntime, Memory, Content, generateObject, elizaLogger, State, composeContext, ModelClass, HandlerCallback } from "@elizaos/core";
import { z } from "zod";
import { example, example2, example3, example4, example5 } from "./examples/judge_examples.ts";
import { getCompletion } from "../services/atoma.ts";

const responseTemplate = `
Analyze the combatants' CURRENT CONDITION to determine:
1. Action viability (based on stamina/agility)
2. Damage calculation (strength vs defense)
3. Secondary effects (bleeding, exhaustion)
4. Crowd reaction impact (integrity modifier)

Consider environmental factors:
- Arena hazards
- Visibility conditions
- Equipment status

Example response:
\`\`\`json
{
  "fighter1": {
    "stats": { /* UPDATE VALUES BASED ON NARRATIVE RESULT */ },
    "name": "string",
    "status_effects": ["array"]
  },
  "fighter2": {
    "stats": { /* UPDATE VALUES BASED ON NARRATIVE RESULT */ },
    "name": "string",
    "status_effects": ["array"]
  },
  "environment": {
    "hazards_active": ["array"],
    "crowd_mood": "string"
  },
  "narrative": "string" 
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the following information about the requested round:
- fighter1 stats
- Fighter2 stats  
- fighter1 and fighter2 intented actions
- what happened previously

with this current data and their stats and planned actions and last action on arena, define a result action with the best possible outcome and define their new STATS BASED ON NARRATIVE RESULT

Respond with a JSON markdown block containing only the extracted values.
`


const judge_validate_action: Action = {
  name: "VALIDATE_ROUND",
  similes: ["GET_ROUND_RESULT", "ROUND_RESULT", "ROUND"],
  description: "Judge will valuate the round result",
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    elizaLogger.log("Action get round result")
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state: State, _options: { [key: string]: unknown }, callback?: HandlerCallback) => {
    elizaLogger.log("Action get round result")

    const responseSchema = z.object({
      fighter1: z.object({
        stats: z.object({
          health: z.coerce.string(),
          stamina: z.coerce.string(),
          strength: z.coerce.string(),
          agility: z.coerce.string(),
          wisdom: z.coerce.string(),
          sneaking: z.coerce.string(),
          dexterity: z.coerce.string()
        }),
        status_effects: z.array(z.string()),
        name: z.string()
      }),
      fighter2: z.object({
        stats: z.object({
          health: z.coerce.string(),
          stamina: z.coerce.string(),
          strength: z.coerce.string(),
          agility: z.coerce.string(),
          wisdom: z.coerce.string(),
          sneaking: z.coerce.string(),
          dexterity: z.coerce.string()
        }),
        status_effects: z.array(z.string()),
        name: z.string()
      }),
      environment: z.object({
        hazards_active: z.array(z.string()),
        crowd_mood: z.string()
      }),
      narrative: z.string()
    })

    elizaLogger.log(message)

    let retries = 3;

    const timestamp = new Date()

    do {

      const completion = await getCompletion(
        message.content.text,
        "meta-llama/Llama-3.3-70B-Instruct",
        responseTemplate,
        runtime.getSetting("ATOMA_API_KEY")
      )

      if (completion) {
        const message = completion.choices[0].message;
        try {
          const text = JSON.parse(message.content)
          const valid = responseSchema.safeParse(text)

          if (!valid.success) {
            throw new Error("Could not parse data")
          }

          console.log(text)

          callback({
            text: JSON.stringify(text),
          })

          retries = 0

        } catch (e) {
          retries -= 1
          elizaLogger.error(e, "Could not parse data")
        }
      }
    } while (retries > 0)
  },
  suppressInitialMessage: true,
  examples: [
    example,
    example2,
    example3,
    example4,
    example5
  ]
};

export { judge_validate_action };
