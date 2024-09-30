import { promises as fs} from "fs"
import { NextResponse } from "next/server";



export async function GET(request:Request,{params}:{params:{pagina:string}}){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos = JSON.parse(file);
    const API_KEY = process.env.NASA_API_KEY;    
    return NextResponse.json(produtos);
    let response;
    switch(params.pagina){
        case 'sistema':
            response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        case 'darwin':
            response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        case 'catastrofismo':
            response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        case 'calculo':
            response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        default:
            response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    }
    const data = await response.json()
    return NextResponse.json(data);
}