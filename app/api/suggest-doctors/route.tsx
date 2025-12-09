import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/config/OpneAiModel";
import { AIDoctorAgents } from "@/shared/list";

export async function POST(req:NextRequest) {
    const {notes} = await req.json();
    try{
        const completion = await openai.chat.completions.create({
          model: "openai/gpt-oss-20b",
          messages: [
            {role:"system",content:JSON.stringify(AIDoctorAgents)},
            { role: "user", content: "User Notes/Symptoms:"+notes+", Depends on notes and symptoms, Please suggest list of doctors full data of doctor , Return Object in JSON only." }

            ],
        });
        const response = completion.choices[0].message.content;
        const newresponse = response ? response.trim().replace('```json','').replace('```','') : "";
        const JSONResp = JSON.parse(newresponse);
        // Parse the response to ensure it's valid JSON before sending
        // const parsedResponse = response ? JSON.parse(response) : [];
        return NextResponse.json(JSONResp);

    }catch(error){
        return NextResponse.json(error);
    }
    
}