import Link from "next/link"

const Menu = ()=>{

    return(
        <nav>
            <Link href={"/"}></Link>
            <Link href={"/catastrofismo"}>Pagina Principal</Link>
            <Link href={"/darwin"}>Teoria Da Evolução de Darwin</Link>
            <Link href={"/sitema"}>Sistema Solar</Link>
            <Link href={"/calculo"}>Calculos</Link>
        </nav>
    )
}

export default Menu