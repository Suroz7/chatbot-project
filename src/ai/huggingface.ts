import { HfInference } from "@huggingface/inference";


// Get the API key from the environment variable
const apiKey = process.env.REACT_APP_HUGGINGFACE_API_KEY;

if (!apiKey) {
  throw new Error("Hugging Face API key is missing!");
}

const client = new HfInference(apiKey);

export const getChatResponse = async (prompt: string) => {
    try {
        const chatCompletion = await client.chatCompletion({
            model: "deepseek-ai/DeepSeek-R1",  // Using DeepSeek-R1 model
            messages: [
                {
                    role: "user",
                    content: "reply with only an final answer, Do not explain or provide reasoning",
                },
            ],
            provider: "together",
            max_tokens: 1000,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Error: Unable to fetch AI response, Please try after a month when inference credits are reset.";
    }
};
