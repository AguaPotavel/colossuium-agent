import { AtomaSDK } from "atoma-sdk";

export class AtomaClient {
  atoma: AtomaSDK

  constructor(bearer: string) {
    this.atoma = new AtomaSDK({
      bearerAuth: bearer,
    });
  }

  async getCompletion(prompt: string, model: string, template: string) {
    const completion = await this.atoma.chat.create({
      messages: [
        { "role": "system", "content": template },
        { "role": "user", "content": prompt }
      ],
      model: model 
    });

    return completion
  }
}
