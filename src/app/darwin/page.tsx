import Image from "next/image"


const Darwin = () => {

    return (
        <div className="flex flex-col gap-10 p-10">
            <h1 className="font-bold text-4xl mb-10">Teoria da Evolução de Darwin</h1>
            <section className="h-72 flex flex-row items-center justify-between">
                <div className="w-1/2">
                    <h2 className="font-bold text-2xl mb-5">Teoria da Evolução</h2>
                    <p>A teoria da evolução de Charles Darwin, proposta no século XIX, revolucionou a biologia e nossa compreensão da vida na Terra. Darwin argumentou que as espécies não são imutáveis, mas sim sujeitas a um processo contínuo de mudança ao longo do tempo. Seu conceito central é a seleção natural, que explica como as características favoráveis se tornam mais comuns em uma população ao longo de gerações. Essas características são heranças que aumentam a chance de sobrevivência e reprodução dos indivíduos.</p>
                </div>
                <div>
                    <Image
                        src="/img/evolucionismo.webp"
                        width={350}
                        height={350}
                        alt="Evolucionismo"
                    />
                </div>
            </section>
            <section className="h-72 flex flex-row items-center justify-between">
                <div className="w-1/2">
                    <h2 className="font-bold text-2xl mb-5">Seleção Natural</h2>
                    <p>A seleção natural ocorre quando há variações entre os indivíduos de uma espécie, e essas variações impactam sua aptidão para sobreviver em um ambiente específico. Por exemplo, em um ambiente onde a comida é escassa, indivíduos que possuem habilidades superiores de forrageamento podem sobreviver e reproduzir-se mais eficazmente. Com o tempo, essas características vantajosas se tornam predominantes na população. Esse processo gradual resulta na adaptação das espécies ao seu ambiente, levando à diversidade biológica que observamos hoje.</p>
                </div>
                <div>
                    <Image
                        src="/img/selecao.jpeg"
                        width={350}
                        height={350}
                        alt="Seleção natural"
                    />
                </div>
            </section>
        </div>
    )
}

export default Darwin