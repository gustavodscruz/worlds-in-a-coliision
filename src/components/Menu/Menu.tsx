import Link from "next/link"

const Menu = () => {

    return(
        <nav className="flex w-2/3 flex-row gap-5 justify-around">
            <Link href={"/"}>Pagina Principal</Link>
            <Link href={"/catastrofismo"}>Catastrofismo</Link>
            <Link href={"/darwin"}>Teoria Da Evolução de Darwin</Link>
            <Link href={"/sistema"}>Sistema Solar</Link>
            <Link href={"/calculo"}>Calculos</Link>
        </nav>
    )
}

export default Menu