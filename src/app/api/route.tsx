import { Apod } from "@/types";
import { NextResponse } from "next/server";

// export async function GET(){
    
//     const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
//     const produtos = JSON.parse(file);

//     return NextResponse.json(produtos);
// }


export async function GET(){
    const API_KEY = process.env.NASA_API_KEY;    
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    const data : Apod = await response.json()
    return NextResponse.json(data);
}