import { promises as fs} from "fs"
import { NextResponse } from "next/server";



export async function GET(request:Request,{params}:{params:{pagina:string}}){
    const file = await fs.readFile(process.cwd() + '/src/data/base.json','utf-8');
    const produtos = JSON.parse(file);    return NextResponse.json(produtos);
    let response;
    switch(params.pagina){
        case 'sistema':
            response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ekeoDfiuYCcLw22QJWlVFLT4iOkzgiykmhaJhHNo');
        case 'darwin':
            response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ekeoDfiuYCcLw22QJWlVFLT4iOkzgiykmhaJhHNo');
        case 'catastrofismo':
            response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ekeoDfiuYCcLw22QJWlVFLT4iOkzgiykmhaJhHNo');
        case 'calculo':
            response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ekeoDfiuYCcLw22QJWlVFLT4iOkzgiykmhaJhHNo');    
        default:
            response = await fetch('https://api.nasa.gov/planetary/apod?api_key=ekeoDfiuYCcLw22QJWlVFLT4iOkzgiykmhaJhHNo');
    }
    const data = await response.json()
    return NextResponse.json(data);
}