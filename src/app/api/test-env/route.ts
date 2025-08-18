import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    start: process.env.DATABASE_URL?.slice(0, 30) ?? "NO DEFINIDA",
  });
}
