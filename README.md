# 🩺 Medivoice — AI Medical Voice Assistant

Medivoice is an **AI-powered voice assistant for healthcare**, designed to make medical interactions smarter, faster, and more human-centric.
It enables **real-time symptom analysis, prescription support, and health record automation** — reducing the clinical workload while empowering patients with compassionate AI.

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
git clone https://github.com/rajeshchau/Medivoice.git
cd Medivoice
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

Create a `.env.local` file in the root directory and add the necessary environment variables. Example:

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

Refer to `.env.example` for a complete list of required variables.

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

### 6️⃣ (Optional) Deploy

Deploy the application using one of the following platforms:

- **Vercel**: Follow the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for seamless deployment.
- **Docker**: Build and run the containerized app:
  ```bash
  docker build -t medivoice .
  docker run -p 3000:3000 medivoice
  ```
- **Render/Railway**: Configure your deployment pipeline as per their respective guides.

---

📚 Learn More

- Check out the [Next.js Documentation](https://nextjs.org/docs) for advanced features and best practices.
- Explore the [Medivoice Wiki](https://github.com/rajeshchau/Medivoice/wiki) for detailed setup guides and feature documentation.
- Contribute to the project by submitting feedback or pull requests to the [Medivoice GitHub repository](https://github.com/rajeshchau/Medivoice).

---

## 🤝 Contributing

We welcome contributions to Medivoice! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

For questions or support, reach out via:

- **GitHub Issues**: [https://github.com/rajeshchau/Medivoice/issues](https://github.com/rajeshchau/Medivoice/issues)
- **Email**: [rc8807928@gmail.com](mailto:rc8807928@gmail.com)

---

© 2025 Medivoice. All rights reserved.
