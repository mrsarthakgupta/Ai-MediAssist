import { db } from "@/config/db";
import { SessionChatTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { eq, desc } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const { notes, selectedDoctor } = await req.json();
  const user = await currentUser();

  try {
    const sessionId = uuidv4();

    const result = await db.insert(SessionChatTable).values({
      sessionId: sessionId,
      notes: notes,
      // Remove conversation and report if not in schema
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: new Date().toISOString(),
      selectedDoctor: selectedDoctor // Only if this exists in schema
    }).returning();

    return NextResponse.json(result[0]);
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get('sessionId') || '';
  const user = await currentUser();

  if(sessionId === "all"){
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) {
      return NextResponse.json({ error: "User email not found" }, { status: 400 });
    }
    const result = await db.select().from(SessionChatTable)
      .where(eq(SessionChatTable.createdBy, email))
      .orderBy(desc(SessionChatTable.id));
    return NextResponse.json(result);
  } else {
    const result = await db.select().from(SessionChatTable)
      .where(eq(SessionChatTable.sessionId, sessionId));
    return NextResponse.json(result);
  }
}
