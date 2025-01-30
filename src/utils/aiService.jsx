import OpenAI from "openai";

export const enhanceContentWithAI = async (content, prompt) => {
  const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY });

  const response = await openai.completions.create({
    model: "gpt-4",
    prompt: `Enhance the following content based on this user prompt: ${prompt}\n\n${content}`,
    max_tokens: 100,
  });

  return response.choices[0].text || content;
};
