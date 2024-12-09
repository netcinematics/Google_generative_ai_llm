import { GoogleGenerativeAI } from "@google/generative-ai";
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();
const GGA_API_KEY = process.env.GGA_API_KEY;
console.log('Alive')

// const genAI = new GoogleGenerativeAI(GGA_API_KEY);
// const model = genAI.getGenerativeModel({model:"gemini-pro"});
//'models/gemini-1.5-pro'  
//"gemini-1.5-flash"
//"text-embedding-005"
// console.log('Model:',model)

async function getModel() {
    const genAI = new GoogleGenerativeAI(GGA_API_KEY);
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
    await getModel();
    // await batchEmbedContents();
}
runAll();