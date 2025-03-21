import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://api.aviationstack.com/v1";
const API_KEY = process.env.API_KEY;

export async function GET(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const params = req.nextUrl.searchParams;
  const offset = params.get("offset") ?? 0;
  const limit = params.get("limit") ?? 100;

  try {
    const response = await axios.get(`${API_URL}/airports`, {
      params: {
        access_key: API_KEY,
        offset,
        limit,
      },
    });
    return NextResponse.json(response.data.data);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const status = error.response?.status ?? 500;
      const message =
        error.response?.data?.error?.message ?? "API request failed";

      return NextResponse.json({ error: message }, { status });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
