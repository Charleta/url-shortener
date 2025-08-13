import { NextResponse } from "next/server";
import prisma from "../../../../prisma/lib/prisma";

export async function GET(){

const urls = await prisma.url.findMany();


return NextResponse.json(urls);
}