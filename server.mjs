import { GoogleGenerativeAI } from "@google/generative-ai";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();
const GGA_API_KEY = process.env.GGA_API_KEY;
const genAI = new GoogleGenerativeAI(GGA_API_KEY);
console.log('Alive')

// const genAI = new GoogleGenerativeAI(GGA_API_KEY);
// const model = genAI.getGenerativeModel({model:"gemini-pro"});
//'models/gemini-1.5-pro'  
//"gemini-1.5-flash"
//"text-embedding-005"
// console.log('Model:',model)

async function getAIEmbedding() {
    const model = genAI.getGenerativeModel({
        model: "embedding-001",
      //   model: "text-embedding-005",
      });
      const prompt = "quick red fox jumps over brown dog";
      const result = await model.embedContent(prompt);
      const embedding = await result.embedding;
      console.log("EMBED:",embedding.values);
}
async function getAIChat() {
    const model = genAI.getGenerativeModel({
        model: "gemini-pro",
      });
    const chat = model.startChat({
        parts:[
            {role:"user",parts:"hello, no one has a magic packpack, it does not exist"},
            {role:"model",parts:"Good day Enzo."},
        ],
        generationConfig:{maxOutputTokens:20}
    });
    const msg = "How many humans exist?"
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log("RESP:",text);    
}
async function getModel() {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    //   model: "text-embedding-005",
    });
    const prompt = "magic backpack?";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log("RESP:",text);

    // const result = await model.embedContent("Hollo Wurldz!");
    // console.log("EMBEDZ 1:",result.embedding);
  }

async function runAll() {
    // await getModel();
    // await getAIChat();
    await getAIEmbedding();
    // await batchEmbedContents();
}
runAll();