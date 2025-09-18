'use client';

import React, { useState } from 'react';
import AddFileModal from '../../components/AddFileModal/AddFileModal';
import { MdDeleteForever } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '/assets/Logo.png';
import ArquivoNaoEncontrado from '/assets/arquivo_nao_encontrado.jpg';

const UploadsPage = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const addFile = (fileData: { title: string; observation: string }) => {
    const newFileData = {
      ...fileData,
      date: new Date().toLocaleString(),
    };
    setFiles([...files, newFileData]);
    setModalOpen(false);
  };

  const deleteFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const goHome = () => router.push('/');

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header */}
      <header className="bg-sky-900 shadow-md p-4 flex justify-between items-center">
        <Image src={Logo} alt="Logo da Empresa" width={200} height={100} />
        <button
          onClick={goHome}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Logoff
        </button>
      </header>

      {/* Título da página de Uploads*/}
      <h1 className="text-3xl text-center mt-6 font-semibold text-sky-900">Meus Arquivos</h1>

      {/* Modal - chama o modal */}
      {isModalOpen && <AddFileModal onAddFile={addFile} onClose={() => setModalOpen(false)} />}

      {/* Conteúdo */}
      {files.length === 0 ? (
        <div className="flex flex-col items-center mt-10">
          <Image
            src={ArquivoNaoEncontrado}
            alt="Nenhum arquivo encontrado"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="text-gray-500">Nenhum arquivo encontrado. Adicione um arquivo.</p>
        </div>
      ) : (
        <div className="mt-8 max-w-4xl mx-auto bg-[#F1F5F9] shadow-md rounded-lg p-4">
          <table className="w-full text-left border-collapse text-zinc-800">
            <thead>
              <tr className="bg-zinc-300 text-zinc-900">
                <th className="p-3 font-medium">Título</th>
                <th className="p-3 font-medium">Observação</th>
                <th className="p-3 font-medium">Data</th>
                <th className="p-3 font-medium">Ação</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-zinc-100' : 'bg-zinc-200'}
                >
                  <td className="p-3">{file.title}</td>
                  <td className="p-3">{file.observation}</td>
                  <td className="p-3">{file.date}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteFile(index)}
                      className="text-red-600 hover:text-red-800 transition text-2xl"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Botão de adicionar */}
      <div className="flex justify-center mt-6 mb-10">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Adicionar Arquivo
        </button>
      </div>
    </div>
  );
};

export default UploadsPage;