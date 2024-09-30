"use client"

import { Apod } from '@/types'
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


    const [imagens, setImagens] = useState<Apod[]>([]);
    const [indiceImg, setIndiceImg] = useState<number>(0);
    // const [onTimeChange, setOnTimeChange] = useState(true)
    useEffect(() => {
        const pegarImagens = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/apod/3');
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                const data: Apod[] = await response.json();
                setImagens(data);
            } catch (error) {
                console.error('Erro ao buscar imagem:', error);
            }
        };

        pegarImagens(); // Chama a função inicialmente

        const tempoImagem = setInterval(() => {
            setIndiceImg((prevIndice) => (prevIndice === 2 ? 0 : prevIndice + 1));
        }, 2000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(tempoImagem);
    }, []);

    return (
        <div className='m-auto flex px-4'>
            <div className="w-1/2">
                O sistema solar proposto por **Immanuel Velikovsky** desafia a visão tradicional da astronomia. Ele foi um psiquiatra e autor que ganhou notoriedade na década de 1950 por suas teorias controversas, particularmente em relação à história e à dinâmica do sistema solar. Em sua obra mais conhecida, *Mundos em Colisão* (1950), Velikovsky sugeriu que eventos catastróficos cósmicos moldaram a história da Terra e de outros planetas do sistema solar.

                Velikovsky argumentou que, no passado relativamente recente, os planetas, especialmente Vênus, não ocupavam suas órbitas atuais. Ele propôs que Vênus foi ejetado de Júpiter como um cometa e passou perigosamente perto da Terra, causando grandes perturbações no clima e na geologia terrestre. Segundo Velikovsky, esse evento teria causado uma série de catástrofes relatadas nas mitologias e textos religiosos de várias civilizações antigas.

                Ele também sugeriu que Marte, em um período subsequente, interagiu com a Terra de maneira igualmente catastrófica, resultando em mudanças no eixo da Terra e em eventos históricos que foram registrados em lendas e mitos.

                As teorias de Velikovsky foram amplamente rejeitadas pela comunidade científica da época, pois desafiavam as leis da física, a mecânica celeste e o entendimento sobre a estabilidade das órbitas planetárias. Seus críticos apontaram que suas ideias careciam de evidências observacionais e violavam as leis da gravitação newtoniana.

                Apesar das críticas, Velikovsky atraiu muitos seguidores, em parte devido à sua habilidade em conectar eventos históricos e mitológicos com fenômenos astronômicos. Ele acreditava que a ciência moderna deveria considerar as tradições e os registros antigos como evidências para revisar seus conceitos sobre a história do sistema solar.

                Em resumo, o sistema solar de Velikovsky é uma visão baseada em catastrofismo, na qual eventos cósmicos violentos moldaram a história da Terra e de outros planetas, em oposição ao modelo gradualista aceito pela ciência convencional.
            </div>
            <div>
                {/* {imagens.length > 0 && (<Image className='m-auto py-4' src={imagens[indiceImg]['url']} height={500} width={500} alt="Sistema Solar" />)} */}
                {imagens.length > 0 ? (
                    <Image className='m-auto py-4 w-1/2 h-max' src={imagens[indiceImg]['url']} height={1200} width={1200} objectFit='cover' alt="Sistema Solar" />
                ) : (
                    <iframe src="https://lottie.host/embed/265fc7e9-683d-432b-a4e4-9a21f74036ef/8xjvf9tK9E.json"></iframe>
                )}
            </div>
        </div>
    )
}

export default SistemaSolar