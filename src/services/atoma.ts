
export async function getCompletion(prompt: string, model: string, template: string, bearer: string) {
  const response = await fetch(`https://api.atoma.network/v1/chat/completions`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${bearer}`
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { "role": "system", "content": template },
        { "role": "user", "content": prompt }
      ]
    }),
    method: "POST",
  })

  return response.json()
}
