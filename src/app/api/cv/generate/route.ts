import { GenerateCVResponse } from "@/api/requests";
import { NextResponse, type NextRequest } from "next/server";

const api = "http://10.142.11.200:3000/cv-helper/invoke"

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    const s = await request.json();
    const body = JSON.stringify({ input: { email: s.email, query: s.query } });
    const t = await fetch(api, { 
        body, 
        method: "POST",
        headers: {
            'Accept': 'application/json',
        }
    }).then(r => r.json());
    return NextResponse.json(t.output);
}