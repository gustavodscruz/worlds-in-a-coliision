import Menu from "../Menu/Menu"

const Cabecalho = ()=>{

    return(
        <header className="flex flex-row items-center px-4 bg-slate-400 w-full h-[5rem] justify-between">
            <h1>Worlds in Collision</h1>
            <Menu></Menu>
        </header>
    )
}


export default Cabecalho