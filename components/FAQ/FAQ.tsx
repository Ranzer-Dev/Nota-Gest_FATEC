import React, { useState } from 'react';
import faq from '../../assets/FAQ.jpg';
import Image from 'next/image';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); 
  // openIndex armazenará o índice da pergunta que está aberta. Quando o componente é montado, o openIndex é inicializado como null. Isso significa que nenhuma resposta está visível inicialmente.
  // Quando o usuário clica no botão + ou - para uma pergunta, a função toggleAnswer é chamada, passando o índice da pergunta clicada.
  // Se o índice da pergunta que está sendo clicada é o mesmo que o openIndex atual, isso significa que a resposta já está aberta, então setOpenIndex é chamado com null, fechando a resposta.
  // Se o índice é diferente, setOpenIndex armazena o novo índice, abrindo a resposta correspondente.

  const toggleAnswer = (index: number) => { 
    // Função para alternar a visibilidade da resposta
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "Como o sistema ajuda com a documentação de impostos?", answer: "O sistema organiza seus documentos relacionados aos impostos, facilitando a consulta e a apresentação de comprovantes quando necessário." },
    { question: "O que devo fazer se encontrar um erro ao fazer upload?", answer: "Se você encontrar um erro, verifique sua conexão com a internet e o formato do arquivo. Se o problema persistir, entre em contato com nosso suporte técnico." },
    { question: "Como posso entrar em contato com o suporte?", answer: "Você pode entrar em contato com nosso suporte enviando um e-mail para notagestsuporte@outlook.com" },
    { question: "Como posso recuperar um arquivo que deletei?", answer: "Uma vez que um arquivo é deletado, não podemos recuperá-lo. Recomendamos ter cópias de segurança dos documentos mais importantes." },
  ];

  return (
    <div className="flex justify-center items-center gap-24 mt-16">
      <Image src={faq} alt="FAQ" className="rounded-full max-w-[30%] h-auto mb-8" />
      
      <div className="flex flex-col w-[50rem] h-[30rem]">
        <h2 className="font-bold text-4xl mt-12 mb-15 text-center">Perguntas Frequentes (FAQ)</h2>
        
        <div className="space-y-8">
          {/* Mapeia todas as perguntas e respostas */}
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between">
                {/* Exibe a pergunta */}
                <strong>{faq.question}</strong>
                {/* Botão para alternar a resposta */}
                <button
                  className="w-10 h-10 rounded-full border-none text-xl flex justify-center items-center"
                  onClick={() => toggleAnswer(index)} 
                  // Alterna a visibilidade da resposta
                >
                  {openIndex === index ? '-' : '+'} 
                  {/* Exibe '-' se a pergunta estiver aberta, caso contrário exibe '+' */}
                </button>
              </div>
              {/* Exibe a resposta, se o índice da pergunta for o mesmo que o openIndex */}
              {openIndex === index && <p className="mt-2 ml-4">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
