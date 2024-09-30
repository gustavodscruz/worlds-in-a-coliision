import Link from "next/link"

const Menu = ()=>{

    return(
        <nav className="flex w-1/2 flex-row justify-around">
            <Link href={"/"}></Link>
            <Link href={"/catastrofismo"}>Pagina Principal</Link>
            <Link href={"/darwin"}>Teoria Da Evolução de Darwin</Link>
            <Link href={"/sistema"}>Sistema Solar</Link>
            <Link href={"/calculo"}>Calculos</Link>
        </nav>
    )
}

export default Menu