🩺 Medivoice — AI Medical Voice Assistant

Author: Sarthak Gupta
Live Demo: https://ai-medi-assist-nu.vercel.app

Medivoice is an advanced AI-powered medical voice assistant that allows users to speak directly with specialized AI doctors.
It performs real-time voice conversations, symptom analysis, medical report generation, and session storage —
making it feel like you're talking to a real doctor.

Built with Next.js + Vapi + Gemini + Drizzle + Neon + Clerk, it is fast, scalable, and production-ready.
---

## ✨ Features

- 🎙 **Voice-Enabled Interaction** — Natural, conversational interface with speech-to-text & text-to-speech support.  
- 🧾 **Real-Time Symptom Analysis** — Patients can describe symptoms and receive instant AI-powered insights.  
- 💊 **Smart Prescription Support** — Suggests or validates prescriptions with dosage checks (assistive only).  
- 📑 **Health Record Automation** — Automatically stores and organizes medical conversations into digital records.  
- 🧑‍⚕️ **Doctor–Patient Bridge** — Enhances communication, reduces repetitive tasks, and supports decision-making.  
- 🔒 **Privacy by Design** — Focus on secure handling of sensitive medical data.  

---

## 🖼 Preview

> _Screenshots / Demo GIFs go here_  
Example:  

<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/8fb3fd3e-d280-4e62-94f3-b2eaa2df0ac9" />

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/30020479-576d-4753-87e8-6374ea86e2bb" />

---

## 🛠 Tech Stack

| Layer            | Technology |
|------------------|------------|
| **Frontend**     | Next.js, React, TailwindCSS |
| **Backend**      | Node.js (Express) / Python (FastAPI) |
| **Speech AI**    | OpenAI Whisper / ElevenLabs / Google Speech API |
| **Voice Output** | ElevenLabs TTS / AWS Polly |
| **Database**     | PostgreSQL / MongoDB / Drizzle ORM |
| **Deployment**   | Vercel / Docker / Render / Railway |

---

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/Medivoice.git
cd Medivoice

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables

Create a .env.local file:

DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

OPEN_ROUTER_API_KEY=

NEXT_PUBLIC_VAPI_API_KEY=
NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID=


Check .env.example (if exists) for reference.

4️⃣ Run the Development Server
npm run dev


Visit:
👉 http://localhost:3000

🗄 Database Setup (Neon + Drizzle)

Run database migrations:

npx drizzle-kit push

📡 Vapi Voice Assistant Setup

Go to Vapi Dashboard

Create an Assistant

Configure voice, model, transcriber

Copy the Assistant ID → put in .env.local

Your app will trigger calls dynamically

🎯 Deployment (Vercel)

Push project to GitHub

Import repository into Vercel

Add environment variables

Deploy

Live Demo: https://ai-medi-assist-nu.vercel.app

🤝 Contributing

This project is currently personal (by Sarthak Gupta).
If opened publicly, contributions will be welcomed via:

git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature

📜 License

This project is licensed under the MIT License.

👤 Author

Sarthak Gupta
Developer • Creator of Medivoice
© 2025 Medivoice. All rights reserved.
