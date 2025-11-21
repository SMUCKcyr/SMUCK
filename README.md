# SMUCK - Landing Page & Simple Chat Backend

This is a minimal Next.js project prepared for deployment on Vercel.
It contains a landing page (pages/index.jsx) and a serverless API route (pages/api/chat.js)
that forwards chat messages to OpenAI.

## Quick Start (for absolute beginners)

1. Create an account on https://github.com and create a new repository named `smuck`.
2. Upload the contents of this project (all files) to the repository.
3. Create an account on https://vercel.com and connect it to your GitHub.
4. Import the `smuck` repository into Vercel as a new project and click **Deploy**.
5. In the Vercel project settings, add an Environment Variable:
   - Name: `OPENAI_API_KEY`
   - Value: (your OpenAI API key)
6. Re-deploy the project after adding the environment variable.
7. Open the deployed URL and test the demo.

## Local testing (optional, advanced)
1. Install Node.js (v18+) and run:
   ```
   npm install
   npm run dev
   ```
2. Create a `.env.local` file with:
   ```
   OPENAI_API_KEY=sk-...
   ```
3. Open http://localhost:3000

## Notes
- This is a starting point. For production use you'll want to:
  - Add rate-limiting and moderation
  - Add a vector DB for document-based answers (RAG)
  - Integrate with WhatsApp (Twilio/360dialog) if needed