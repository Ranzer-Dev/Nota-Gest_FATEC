"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer/Footer'; 

type Credentials = {
  email: string;
  senha: string;
};

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    senha: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Credenciais do usuário:', credentials);
    if (credentials.email && credentials.senha) {
      router.push('/uploads');
    }
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div>
      {/* Faixa superior azul */}
      <div className="w-full h-[20vh] bg-sky-900" />
  
      {/* Card do login */}
      <main className="font-['Plus_Jakarta_Sans',sans-serif] w-full max-w-sm mx-auto bg-[#FAFAFC] p-6 rounded-t-lg -mt-16 z-10 relative">
        <section className="z-10 bg-[#FAFAFC] mb-6">
          <div className="text-center">
            <h1 className="my-5 text-gray-600 text-2xl">Login</h1>
          </div>
  
          <form onSubmit={handleSubmit}>
            {/* Campo de email */}
            <div className="mb-4">
              <input
                name="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded text-base"
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
  
            {/* Campo de senha */}
            <div className="mb-2">
              <input
                name="senha"
                id="senha"
                className="w-full p-3 border border-gray-300 rounded text-base"
                type="password"
                placeholder="Senha"
                value={credentials.senha}
                onChange={handleChange}
                required
              />
            </div>
          </form>
  
          {/* Link para recuperar senha */}
          <a
            href="/forgot-password"
            className="block text-right underline text-sm mt-1 hover:text-gray-700"
          >
            Esqueceu a senha?
          </a>
        </section>
      </main>
  
      {/* Botões de ação */}
      <div className="flex flex-col font-['Plus_Jakarta_Sans',sans-serif] w-full max-w-sm mx-auto bg-[#F1F5F9] p-6 rounded-b-lg shadow-md mb-10">
        <button
          type="submit"
          className="text-black bg-yellow-400 px-4 py-2 rounded transition duration-300 border-none mb-4 hover:bg-yellow-500 hover:scale-105"
          onClick={handleSubmit}
        >
          Login
        </button>
  
        <button
          onClick={handleGoHome}
          className="text-black px-4 py-2 rounded transition duration-300 border-none bg-gray-300 mb-2 hover:bg-yellow-500 hover:scale-105"
        >
          Voltar para a Home
        </button>
      </div>
  
      {/* Rodapé */}
      <Footer />
    </div>
  );
}
export default Login;
