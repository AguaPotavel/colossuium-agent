import { Provider, IAgentRuntime, Memory } from "@elizaos/core"
import { AtomaClient } from "../external.ts"

export const AtomaProvider: Provider = {
  get: async (runtime: IAgentRuntime, message: Memory) => {
    const atoma = new AtomaClient(runtime.getSetting("ATOMA_API_KEY"))
    return atoma;
  }
}
