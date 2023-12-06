import { GenerateCVResponse } from "@/api/requests";
import { NextResponse, NextRequest } from "next/server";
import { auth } from "../../auth";
import { defaults } from "lodash-es";

const api = "http://10.142.11.200:3000/cv-helper/invoke"

export const POST = async (req: NextRequest): Promise<NextResponse<GenerateCVResponse | string | unknown>> => {
    const session = await auth()
    if (!session) {
      return NextResponse.json("Not authenticated", { status: 401 });
    }
    const data = await req.json();
    const input = defaults({ 
      email: data.email,
      query: data.query
    }, { email: session.user?.email });

    const body = JSON.stringify({ input });
    const result = await fetch(api, { 
        body, 
        method: "POST",
        headers: {
            'Accept': 'application/json',
        }
    });
    if (!result.ok) return NextResponse.json({ message: "Something went wrong" }, { status: 500, statusText: "" });
    const jsonResult = await result.json();
    return NextResponse.json(jsonResult.output);
}