require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT

const OpenAIApi = require('openai');
const openai = new OpenAIApi({
    api_key: process.env.OPENAI_API_KEY
});

app.get('/', async (req, res) => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0]);

  const message = completion.choices[0].message['content'];  
  res.send(message);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})