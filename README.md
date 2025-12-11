## 🩺 Medivoice — AI Medical Voice Assistant  
**Author: Sarthak Gupta**  
<br>
**Live Demo:** https://ai-medi-assist-nu.vercel.app  
<br>
Medivoice is an **AI-powered voice assistant for healthcare**, designed to make medical interactions smarter, faster, and more human-centric.  
It enables **real-time symptom analysis, prescription support, and health record automation** — reducing clinical workload while empowering patients with compassionate AI.

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
> Example:

<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/8fb3fd3e-d280-4e62-94f3-b2eaa2df0ac9" />

<img width="1919" height="1018" alt="image" src="https://github.com/user-attachments/assets/30020479-576d-4753-87e8-6374ea86e2bb" />

---

## 🛠 Tech Stack

| Layer                  | Technology                                      |
| ---------------------- | ----------------------------------------------- |
| **Frontend**     | Next.js, React, TailwindCSS                     |
| **Backend**      | Node.js (Express) / Python (FastAPI)            |
| **Speech AI**    | OpenAI Whisper / ElevenLabs / Google Speech API |
| **Voice Output** | ElevenLabs TTS / AWS Polly                      |
| **Database**     | PostgreSQL / MongoDB / Drizzle ORM              |
| **Deployment**   | Vercel / Docker / Render / Railway              |

---

## 🚀 Getting Started

Follow these steps to set up and run the Medivoice project locally.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** (package manager of your choice)
- **Git** (for cloning the repository)
- (Optional) **Docker** (for containerized deployment)
- (Optional) API keys for Speech AI services (e.g., OpenAI Whisper, ElevenLabs, Google Speech API, AWS Polly)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mrsarthakgupta/Ai-MediAssist.git
cd Ai-MediAssist
```

### 2️⃣ Install Dependencies

Install the required packages using your preferred package manager:

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install

# Or using bun
bun install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables. Example:

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=
OPEN_ROUTER_API_KEY=
NEXT_PUBLIC_VAPI_API_KEY=
NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID=
```

### 4️⃣ Run the Development Server

Start the development server with:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev

# Or using bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5️⃣ Edit and Explore

- Start editing the project by modifying `app/page.tsx`. The page will auto-update as you make changes.
- Explore the codebase to customize features like symptom analysis, prescription support, or health record automation.

### 6️⃣ Deployment Options

▶ Vercel (Recommended)
1. Push the repository to GitHub  
2. Connect your project to **Vercel**  
3. Add `.env` values under **Environment Variables**  
4. Click **Deploy** 🚀  

▶ Docker
```bash
docker build -t medivoice .
docker run -p 3000:3000 medivoice
```
▶ Render / Railway
1. Create a new Web Service
2. Add all required Environment Variables
3. Choose your branch & deploy
4. The server will auto-build and start 🎯

## 📂 Project Structure

<details>
<summary><strong>📦 Click to expand the full project structure</strong></summary>

    Ai-MediAssist/
    │── app/              # Next.js App Router pages & routes
    │── components/       # UI components
    │── config/           # Configurations
    │── context/          # Global Context
    │── drizzle/          # Database schema & ORM
    │── lib/              # Helpers & utilities
    │── public/           # Static assets
    │── shared/           # Common logic
    │── .env              # Environment variables
    │── next.config.ts    # Next.js config
    │── tsconfig.json     # TypeScript config
    │── package.json
    │── README.md

</details>
  
## 📌 Future Improvements (Roadmap)
-  🗣️ Multi-language speech support
-  🏥 Doctor dashboard with patient history  
-  🤝 HIPAA/GDPR compliant storage 
 
## 🎯 Summary
Medivoice is an AI-powered medical voice assistant that enables real-time symptom analysis, prescription support, and automated medical record generation. Built to showcase modern full-stack + AI integration in a healthcare workflow.

## ⭐ Author

**Sarthak Gupta**
<br>
Full Stack Developer — AI · Next.js · Node · Cloud

If you like this project, consider ⭐ starring the repo!
