"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSectionOne() {
  const consultationData = [
    {
      specialist: 'Dr. Amelia Harper',
      description: 'Cardiologist',
      date: 'July 15, 2024',
      action: 'View Report'
    },
    {
      specialist: 'Dr. Ethan Carter',
      description: 'Neurologist',
      date: 'June 22, 2024',
      action: 'View Report'
    },
    {
      specialist: 'Dr. Olivia Bennett',
      description: 'Dermatologist',
      date: 'May 10, 2024',
      action: 'View Report'
    }
  ];

  const aiDoctors = [
    {
      id: 1,
      name: 'Dr. Sophia Clark',
      specialty: 'Cardiologist',
      image: '/doctor2.png'
    },
    {
      id: 2,
      name: 'Dr. Liam Walker',
      specialty: 'Neurologist',
      image: '/doctor1.png'
    },
    {
      id: 3,
      name: 'Dr. Chloe Turner',
      specialty: 'Dermatologist',
      image: '/doctor3.png'
    }
  ];

  
  const handleViewReport = (specialist: string) => {
    console.log(`Viewing report for ${specialist}`);
  };

  const handleStartConsultation = () => {
    console.log('Starting new consultation');
  };
  const { user } = useUser();
  return (
    
    <div className="relative mx-auto flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 min-h-screen">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20 w-full max-w-[960px] mx-auto">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"🧠 Transform Healthcare with AI Voice Agents"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          MediVoice Agent enhances patient care with 24/7 intelligent voice assistance, streamlining triage, scheduling, and medical queries.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
           {!user ? <Link href={"/sign-in"} >
          <button className="w-60 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            Try MediVoice Now
          </button>
          </Link> : (
            <Link href={"/dashboard"}>
              <button className="w-60 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Go to Dashboard
              </button>
            </Link>
          )}
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Request a Demo
          </button>
        </motion.div>
          
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full max-w-[700px] overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 mx-auto">
            <img
              src="/image.png"
              alt="MediVoice Assistant interface preview"
              className="aspect-[16/12] h-auto w-full object-fill"
              height={600}
              width={700}
            />
          </div>
        </motion.div>
        {/* Consultation History Section */}
        
        <div className="flex flex-col gap-6 mt-12">
          <h2 className="text-[20px] md:text-[24px] font-bold leading-[28px] text-left text-slate-700 dark:text-slate-300">
            Consultation History
          </h2>
          <div className="w-full border border-neutral-200 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
            <div className="flex flex-row justify-start items-center w-full bg-neutral-100 dark:bg-neutral-900">
              <div className="py-3 px-4 text-[14px] font-medium leading-[18px] text-left text-slate-700 dark:text-slate-300 w-[271px]">
                Specialist Name
              </div>
              <div className="py-3 text-[14px] font-medium leading-[18px] text-left text-slate-700 dark:text-slate-300 w-[269px]">
                Description
              </div>
              <div className="py-3 text-[14px] font-medium leading-[18px] text-left text-slate-700 dark:text-slate-300 flex-1">
                Date
              </div>
            </div>
            <div className="flex flex-col justify-start items-center w-full">
              {consultationData.map((consultation, index) => (
                <div key={index} className="flex flex-row justify-center items-center w-full border-t border-neutral-200 dark:border-neutral-800">
                  <div className="py-4 px-4 text-[14px] font-normal leading-[18px] text-left text-slate-700 dark:text-slate-300 w-[271px]">
                    {consultation.specialist}
                  </div>
                  <div className="py-4 text-[14px] font-normal leading-[18px] text-left text-neutral-600 dark:text-neutral-400 w-[269px]">
                    {consultation.description}
                  </div>
                  <div className="py-4 flex flex-row justify-between items-end w-full flex-1">
                    <span className="text-[14px] font-normal leading-[18px] text-left text-neutral-600 dark:text-neutral-400">
                      {consultation.date}
                    </span>
                    <button 
                      onClick={() => handleViewReport(consultation.specialist)}
                      className="text-[14px] font-bold leading-[18px] text-left text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600 mr-8 transition-colors"
                    >
                      {consultation.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleStartConsultation}
            className="mt-6 w-60 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            + Start a Consultation
          </button>
        </div>
        {/* AI Specialist Doctors Section */}
        <div className="flex flex-col gap-6 mt-12">
          <h2 className="text-[20px] md:text-[24px] font-bold leading-[28px] text-left text-slate-700 dark:text-slate-300">
            AI Specialist Doctors
          </h2>
          <div className="flex flex-row gap-4 w-full p-4 overflow-x-auto">
            {aiDoctors.map((doctor) => (
              <div key={doctor.id} className="flex flex-col gap-4 justify-start items-center w-[160px] flex-shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px] rounded-lg object-cover"
                />
                <div className="flex flex-col justify-start items-center w-full">
                  <h3 className="text-[16px] font-medium leading-[20px] text-left text-slate-700 dark:text-slate-300">
                    {doctor.name}
                  </h3>
                  <p className="text-[14px] font-normal leading-[18px] text-left text-neutral-600 dark:text-neutral-400">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Navbar = () => {
  const {user} = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Image src={'/logo.png'} alt="logo" width={90} height={50} />
      </div>
      {!user ? 
      <Link href={"/sign-in"} >
      <button className="w-24 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 md:w-32 dark:bg-blue-500 dark:hover:bg-blue-600">
        Sign In
      </button>
      </Link> : <div>
        <div className="flex gap-5 items-center">
          <UserButton />
          <Button>Dashboard</Button>
        </div>
      </div>}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 dark:bg-neutral-800 py-8 mt-12">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-full bg-gradient-to-br from-blue-500 to-teal-500" />
            <h1 className="text-base font-bold text-slate-700 dark:text-slate-300">MediVoice Agent</h1>
          </div>
          <p className="text-[14px] font-normal text-neutral-600 dark:text-neutral-400">
            Empowering healthcare with intelligent voice assistance.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-medium text-slate-700 dark:text-slate-300">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <a href="/about" className="text-[14px] text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About Us</a>
            <a href="/features" className="text-[14px] text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Features</a>
            <a href="/pricing" className="text-[14px] text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Pricing</a>
            <a href="/contact" className="text-[14px] text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-medium text-slate-700 dark:text-slate-300">Contact Us</h3>
          <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
            Email: <a href="mailto:support@medivoice.ai" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">support@medivoice.ai</a>
          </p>
          <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
            Phone: <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">+1 (234) 567-890</a>
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-neutral-200 dark:border-neutral-700 pt-4">
        <p className="text-center text-[14px] text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} MediVoice Agent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};