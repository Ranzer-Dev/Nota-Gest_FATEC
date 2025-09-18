'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaFileDownload } from 'react-icons/fa';

type AddFileModalProps = {
  onAddFile: (fileData: { title: string; observation: string; file: File }) => void;
  onClose: () => void;
};

const AddFileModal: React.FC<AddFileModalProps> = ({ onAddFile, onClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [observation, setObservation] = useState('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (file) {
      onAddFile({ title, observation, file });
      setTitle('');
      setObservation('');
      setFile(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg flex flex-col gap-4"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <FaFileDownload className="text-4xl text-blue-500" />
          <label className="text-gray-800 font-medium">
            {file ? file.name : 'Nenhum arquivo selecionado'}
          </label>
          <input
            type="file"
            accept=".pdf,image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
            required
          />
          <button
            type="button"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            Escolher Arquivo
          </button>
        </div>

        <input
          type="text"
          placeholder="Título"
          className="border border-gray-900 p-2 rounded text-gray-800 placeholder-gray-600"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Observação"
          className="border border-gray-900 p-2 rounded resize-none text-gray-800 placeholder-gray-600"
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Adicionar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFileModal;
