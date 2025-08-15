import prisma from "../../../../../prisma/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;
    await prisma.url.delete({
    where: { id: id },
  });
  return NextResponse.json(
    { message: "URL deleted successfully" },
    { status: 200 }
  );
}
