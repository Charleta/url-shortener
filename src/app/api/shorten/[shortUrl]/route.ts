import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/lib/prisma";

export async function GET(
    request: Request,
    {params}: {params: {shortUrl?: string}}
    
   
){
    try{

       const shortUrl = params.shortUrl;

          if (!shortUrl) {
            return NextResponse.json(
              { error: "Short URL is required" },
              { status: 400 }
            );
          }
          
        const foundUrl = await prisma.url.findUnique({
          where: { short: shortUrl },
        });

          if (!foundUrl) {
            return NextResponse.json(
              { error: "URL not found" },
              { status: 404 }
            );
          }

          return NextResponse.redirect(foundUrl.original);

    }catch(e){
        console.log(e);
    }
}