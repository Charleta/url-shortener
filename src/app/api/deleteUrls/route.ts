import next from "next";
import prisma from "../../../../prisma/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(id:string){
    await prisma.url.deleteMany({
        where: {id:id}
    })
    return NextResponse.json({ message: "URL deleted successfully" }, { status: 200 });
} 