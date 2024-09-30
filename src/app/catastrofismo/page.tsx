import Image from "next/image"


const Catastrofismo = ()=>{

    return(
        <div className="flex flex-col gap-7 p-10">
            <section>
            <h1 className="font-bold text-4xl mb-10">Catastrofismo</h1>
            <p>O catastrofismo, na visão de Velikovsky, sugere que a Terra e suas civilizações passaram por catástrofes catastróficas, resultantes de interações com outros corpos celestes, como Vênus e Marte. Ele propõe que a aproximação desses planetas causou desastres naturais, como inundações, terremotos e mudanças climáticas, que moldaram a trajetória da civilização. Para Velikovsky, esses eventos não eram apenas geológicos, mas também sociais e culturais, influenciando as narrativas e mitos de diferentes culturas.</p>
            </section>
            <section className="h-72 flex flex-row justify-between items-center">
                <div className="w-1/2">
                    <h2 className="font-bold text-2xl mb-5">Evidências e Críticas</h2>
                    <p>Velikovsky se baseou em uma variedade de fontes, incluindo textos antigos e relatos mitológicos, para apoiar suas teorias. No entanto, suas ideias foram amplamente criticadas pela comunidade científica. Os críticos argumentam que suas interpretações dos dados são especulativas e carecem de fundamentação científica rigorosa. Além disso, muitos conceitos apresentados por Velikovsky, como as trajetórias e efeitos de gravitação de planetas, foram considerados incompatíveis com as leis da física.</p>
                </div>
                <div>
                <Image
                        src="/img/catastrofismo.jpeg"
                        width={350}
                        height={350}
                        alt="Evolucionismo"
                    />
                </div>
            </section>
            <section className="h-72">
                <div className="w-full">
                    <h2 className="font-bold text-2xl mb-5">Impacto Cultural</h2>
                    <p>Apesar das controvérsias, "Worlds in Collision" teve um impacto significativo fora da academia, atraindo a atenção de leitores interessados em teorias alternativas e nas intersecções entre ciência, mitologia e história. O livro gerou debates sobre a validade do catastrofismo em contraste com a visão uniformitarista da ciência, que sustenta que as mudanças na Terra ocorrem de maneira gradual ao longo do tempo.</p>
                </div>

            </section>
        </div>
    )
}

export default Catastrofismo