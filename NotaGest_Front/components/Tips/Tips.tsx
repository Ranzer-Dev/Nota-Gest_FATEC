import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tips = () => {
  const tipsData = [
    {
      title: "Mão de Obra e Serviços Terceirizados",
      description: "Não se esqueça de arquivar recibos e notas de serviços prestados na obra. Isso ajudará na dedução do seu Imposto de Renda.",
      link: "https://avt.com.br/construcao-de-casas-documentacao-necessaria/",
    },
    {
      title: "Simplifique a Declaração do Imposto de Renda",
      description: "Ao manter todos os comprovantes organizados, a declaração do Imposto de Renda se torna mais simples e eficiente.",
      link: "https://einvestidor.estadao.com.br/educacao-financeira/imposto-de-renda-2024-documentos-necessarios-declaracao/?gad_source=1&gclid=CjwKCAiArva5BhBiEiwA-oTnXaw1HCZzW4_UEtYGdRWO9UvKJht0ROzk_3j8rpWCLtAsUbIwnS88aBoCASsQAvD_BwE",
    },
    {
      title: "Saiba Quais Documentos São Obrigatórios Para a Declaração",
      description: "Não sabe quais documentos guardar? Tenha em mãos tudo o que for necessário para comprovar seus gastos na construção do imóvel.",
      link: "https://investnews.com.br/guias/imposto-de-renda-o-que-e/?gad_source=1&gclid=CjwKCAiArva5BhBiEiwA-oTnXTgQC0AGuFupWGcwiEwil6QyQKcipzBeSkPQhv27iyT5rWpearIFVxoCBVsQAvD_BwE",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-15 mb-15 tips-container flex justify-between gap-[9%] p-5 max-w-[1200px] mx-auto font-[Plus Jakarta Sans]" 
         id="tips"
         data-aos="fade-up"
         data-aos-anchor-placement="top-bottom"
         data-aos-duration="1000">
      {tipsData.map((tip, index) => (
        <div key={index} className="tip-card bg-[#059669] text-white border border-gray-300 rounded-lg p-5 w-[90%] flex flex-col justify-between text-center"
             data-aos="fade-up">
          <h3 className="tip-title font-bold text-lg mb-2 mt-2">{tip.title}</h3>
          <p className="tip-description text-base leading-[1.5] my-5 mx-5">{tip.description}</p>
          <a href={tip.link} target="_blank" rel="noopener noreferrer" 
             className="tip-button inline-block mt-2 px-4 py-2 bg-[#A7F3D0] text-black rounded-md hover:bg-[#62dbb4]">
            Saiba mais
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tips;

