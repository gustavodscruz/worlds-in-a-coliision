"use client";

import { Apod } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
        const response = await fetch("http://localhost:3000/api/apod/3");
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const data: Apod[] = await response.json();
        setImagens(data);
      } catch (error) {
        console.error("Erro ao buscar imagem:", error);
      }
    };

    pegarImagens(); // Chama a função inicialmente

    const tempoImagem = setInterval(() => {
      setIndiceImg((prevIndice) => (prevIndice === 2 ? 0 : prevIndice + 1));
    }, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(tempoImagem);
  }, []);

  return (
    <>
        <div className="m-auto flex px-4 p-4 gap-8">
          <div className="w-3/4 font p-10 flex flex-col gap-4">
            <h1 className="font-bold text-4xl">
              Introdução ao Sistema Solar de Velikovsky
            </h1>
            <p>
              O sistema solar proposto por Immanuel Velikovsky desafia a visão
              tradicional da astronomia. Ele foi um psiquiatra e autor que ganhou
              notoriedade na década de 1950 por suas teorias controversas,
              particularmente em relação à história e à dinâmica do sistema solar.
            </p>
            <h2 className="font-bold text-2xl">
              Mundos em Colisão e a Teoria Catastrofista
            </h2>
            <p>
              Em sua obra mais conhecida, Mundos em Colisão (1950), Velikovsky
              sugeriu que eventos catastróficos cósmicos moldaram a história da
              Terra e de outros planetas do sistema solar. Velikovsky argumentou
              que, no passado relativamente recente, os planetas, especialmente
              Vênus, não ocupavam suas órbitas atuais.
            </p>
            <h2 className="font-bold text-2xl">
              A Origem de Vênus e Suas Perturbações
            </h2>
            <p>
              Ele propôs que Vênus foi ejetado de Júpiter como um cometa e passou
              perigosamente perto da Terra, causando grandes perturbações no clima e
              na geologia terrestre. Segundo Velikovsky, esse evento teria causado
              uma série de catástrofes relatadas nas mitologias e textos religiosos
              de várias civilizações antigas.
            </p>
            <h2 className="font-bold text-2xl">
              Marte e Sua Interação com a Terra
            </h2>
            <p>
              Velikovsky também sugeriu que Marte, em um período subsequente,
              interagiu com a Terra de maneira igualmente catastrófica. Essas
              interações teriam resultado em mudanças no eixo da Terra e em eventos
              históricos registrados em lendas e mitos.
            </p>
            <h2 className="font-bold text-2xl">Rejeição</h2> Científica
            <p>
              As teorias de Velikovsky foram amplamente rejeitadas pela comunidade
              científica da época, pois desafiavam as leis da física, a mecânica
              celeste e o entendimento sobre a estabilidade das órbitas planetárias.
              Seus críticos apontaram que suas ideias careciam de evidências
              observacionais e violavam as leis da gravitação newtoniana.
            </p>
            <h2 className="font-bold text-2xl">Seguidores e Conclusão</h2>
            <p>
              Apesar das críticas, Velikovsky atraiu muitos seguidores, em parte
              devido à sua habilidade em conectar eventos históricos e mitológicos
              com fenômenos astronômicos. Ele acreditava que a ciência moderna
              deveria considerar as tradições e os registros antigos como evidências
              para revisar seus conceitos sobre a história do sistema solar.
            </p>
            <p>
              Em resumo, o sistema solar de Velikovsky é uma visão baseada em
              catastrofismo, na qual eventos cósmicos violentos moldaram a história
              da Terra e de outros planetas, em oposição ao modelo gradualista
              aceito pela ciência convencional.
            </p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center">
        
            {imagens.length > 0 ? (
              <Image
                className="top-0 rounded h-[500px] object-cover"
                src={imagens[indiceImg]["url"]}
                height={500}
                width={500}
                objectFit="contain"
                alt="Sistema Solar"
              />
            ) : (
              <iframe src="https://lottie.host/embed/265fc7e9-683d-432b-a4e4-9a21f74036ef/8xjvf9tK9E.json"></iframe>
            )}
          </div>
        </div>
    </>
  );
};

export default SistemaSolar;
