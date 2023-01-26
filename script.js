const apiKey = "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";
const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";

function submitQuestion() {
  const question = document.getElementById("question").value;
  const prompt = `Q: ${question}\n`;

  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 2048
    })
  })
  .then(response => response.json())
  .then(data => {
    const answer = data.choices[0].text;
    document.getElementById("answer").innerHTML = answer;
  });
}

