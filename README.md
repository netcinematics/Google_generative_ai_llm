# Google_generative_ai_llm
Follows the tutorial of Ania Kubow - check her out, she is amazing.

### Google Gemini API / REST

This LLM is a NODE SERVER with nodemon.


## Example CURL

curl \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Explain how AI works"}]}]}' \
  -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY'

  also works for :countTokens

  ## SETUP
  npm init       //package.json
  npm install @google/generative-ai
  npm i nodemon
  npm i env


