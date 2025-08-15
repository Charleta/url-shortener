import prisma from "../../../../../prisma/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.url.delete({
    where: { id: id },
  });

  return NextResponse.json(
    { message: "URL deleted successfully" },
    { status: 200 }
  );
}
