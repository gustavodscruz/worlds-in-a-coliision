import { promises as fs} from "fs"
import { NextResponse } from "next/server";

type TipoProduto = {
    id:number;
    nome:string;
    preco: number;
    estoque : number;
}

export async function GET(request:Request,{params}:{params:{pagina:string}}){
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