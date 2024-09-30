"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SistemaSolar = () => {
    // const [img, setImg] = useState(null)
    // useEffect(() => {
    //     const pegarImagem = async () => {
    //         const response = await fetch('https://localhost:3000/api/sistema');
    //         if (!response){
    //             setImg(response)
    //         }
    //     }
    //     pegarImagem();
    // }, [])


    return (
        <div className='m-auto flex flex-col px-4'>
            <div>
                {/* {img ? (
                    <Image className='m-auto py-4' src={img} height={500} width={500} alt="Sistema Solar" />
                ) : (
                    <p>Carregando imagem...</p>
                )} */}
                <Image src='/img/sistema-solar.webp' alt='Sistema Solar' height={600} width={600} />
            </div>
            <div className="">
                O sistema solar proposto por **Immanuel Velikovsky** desafia a visão tradicional da astronomia. Ele foi um psiquiatra e autor que ganhou notoriedade na década de 1950 por suas teorias controversas, particularmente em relação à história e à dinâmica do sistema solar. Em sua obra mais conhecida, *Mundos em Colisão* (1950), Velikovsky sugeriu que eventos catastróficos cósmicos moldaram a história da Terra e de outros planetas do sistema solar.

                Velikovsky argumentou que, no passado relativamente recente, os planetas, especialmente Vênus, não ocupavam suas órbitas atuais. Ele propôs que Vênus foi ejetado de Júpiter como um cometa e passou perigosamente perto da Terra, causando grandes perturbações no clima e na geologia terrestre. Segundo Velikovsky, esse evento teria causado uma série de catástrofes relatadas nas mitologias e textos religiosos de várias civilizações antigas.

                Ele também sugeriu que Marte, em um período subsequente, interagiu com a Terra de maneira igualmente catastrófica, resultando em mudanças no eixo da Terra e em eventos históricos que foram registrados em lendas e mitos.

                As teorias de Velikovsky foram amplamente rejeitadas pela comunidade científica da época, pois desafiavam as leis da física, a mecânica celeste e o entendimento sobre a estabilidade das órbitas planetárias. Seus críticos apontaram que suas ideias careciam de evidências observacionais e violavam as leis da gravitação newtoniana.

                Apesar das críticas, Velikovsky atraiu muitos seguidores, em parte devido à sua habilidade em conectar eventos históricos e mitológicos com fenômenos astronômicos. Ele acreditava que a ciência moderna deveria considerar as tradições e os registros antigos como evidências para revisar seus conceitos sobre a história do sistema solar.

                Em resumo, o sistema solar de Velikovsky é uma visão baseada em catastrofismo, na qual eventos cósmicos violentos moldaram a história da Terra e de outros planetas, em oposição ao modelo gradualista aceito pela ciência convencional.
            </div>
        </div>
    )
}

export default SistemaSolar