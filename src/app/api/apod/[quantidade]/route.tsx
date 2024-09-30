// import { promises as fs} from "fs"
import { Apod } from "@/types";
import { NextResponse } from "next/server";



export async function GET(request:Request,{params}:{params:{quantidade:number}}){
    const API_KEY = process.env.NASA_API_KEY;    
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${params.quantidade}`)
    const data : Apod = await response.json()
    return NextResponse.json(data);
}