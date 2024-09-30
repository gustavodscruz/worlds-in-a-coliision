import Image from "next/image"



export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center pb-3 gap-10 h-full">
            <h1 className="text-7xl">Not Found - 404</h1>
            <figure>
                <Image
                    src="/img/JupiterNotFound.jpg"
                    width={500}
                    height={500}
                    alt="Júpiter"
                />
                <figcaption>Júpiter</figcaption>
            </figure>
            <h2 className="text-5xl">Página não encontrada</h2>
        </div>
    )
}