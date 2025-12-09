import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db"
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm"; // Add this import, adjust the package if needed

export async function POST(){
    const user = await currentUser();

    try {
        const users = await db.select().from(usersTable)
        //@ts-ignore
        .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress));

        if (users.length == 0) {
         const result =  await db.insert(usersTable).values({
            //@ts-ignore
                name: user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                creadits: 10
                //@ts-ignore
            }).returning({ usersTable });
            return NextResponse.json(result[0]?.usersTable);
        }
        return NextResponse.json(users[0]);

    } catch (error) {
        console.error("Error fetching user:", error);
        return new Response("Error fetching user", { status: 500 });
    }

}

// export async function GET(req:NextRequest){
//     const { searchParams } = new URL(req.url);
//     const sessionId = searchParams.get("sessionId")
//     const user = await currentUser();

//     const result = await db.select().from(SessionChatTable)
//     //@ts-ignore
//     .where(eq(SessionChatTable.sessionId,sessionId));

//     return NextResponse.json(result[0]);
// }