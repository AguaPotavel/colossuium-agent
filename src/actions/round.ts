import { Action, IAgentRuntime, Memory, Content, generateObject, elizaLogger, State, composeContext, ModelClass, HandlerCallback } from "@elizaos/core";
import { z } from "zod";
import { example, example2, example3, example4, example5 } from "./examples.ts";

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

with this current data and their stats and planned actions, define a result action and define their new STATS BASED ON NARRATIVE RESULT

Respond with a JSON markdown block containing only the extracted values.

`


const round_result: Action = {
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
          speed: z.coerce.string(),
          sneaking: z.coerce.string(),
          integrity: z.coerce.string()
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
          speed: z.coerce.string(),
          sneaking: z.coerce.string(),
          integrity: z.coerce.string()
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

    console.log(message.content)

    if (!state) {
      // Initialize or update state
      state = (await runtime.composeState(message)) as State;
    } else {
      state = await runtime.updateRecentMessageState(state);
    }

    const roundContext = composeContext({
      state,
      template: responseTemplate,
    });

    const result = await generateObject({
      runtime,
      //@ts-ignore
      schema: responseSchema,
      context: roundContext,
      modelClass: ModelClass.LARGE
    });

    console.log("Generated content:", result.toJsonResponse());

    elizaLogger.info("Round content:", result.object);

    callback({
      text: result.object as string,
    })
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

export { round_result };
