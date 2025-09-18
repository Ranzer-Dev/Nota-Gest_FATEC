import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {  

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <section className="h-100 bg-[#0c4a6e] text-white py-10 flex flex-col items-center " id="about-us-section">
            <div data-aos="fade-right" data-aos-offset="300" className="text-center">
                <h2 className="font-bold text-5xl mt-8">Sobre Nós</h2>
                <p className="text-base mt-12 mx-6 sm:mx-12 md:mx-24 lg:mx-36 leading-7 text-justify">
                    Somos uma empresa comprometida em transformar a gestão documental no setor de construção civil, oferecendo soluções digitais que facilitam a organização de comprovantes e recibos, reduzem o uso de papel e ajudam a proteger o meio ambiente.
                    Nosso objetivo é simplificar processos burocráticos e garantir que todos os documentos importantes estejam seguros, acessíveis e bem organizados, tanto para pequenas obras quanto para grandes projetos.
                    Com a crescente demanda por soluções sustentáveis e eficientes, criamos uma plataforma intuitiva e segura que permite que nossos usuários armazenem e gerenciem seus documentos em qualquer lugar e a qualquer momento. Acreditamos que a tecnologia pode não apenas facilitar o dia a dia, mas também contribuir para um futuro mais verde, reduzindo o desperdício de papel e acelerando a transição para um mundo digital.
                    Junte-se a nós nessa jornada rumo à digitalização e simplificação dos processos na construção civil!
                </p>
            </div>
        </section>
    );
}

export default AboutUs;

