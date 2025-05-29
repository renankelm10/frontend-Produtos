import React from "react";
import { useEffect, useState } from 'react';

  

const Configuracoesjs = ({ atualizarEmpresa }) => {
  const [form, setForm] = useState({
    empresa: '',
    email: '',
    telefone: '',
    cnpj: '',
    endereco: ''
  });

  useEffect(() => {
    const local = localStorage.getItem('configEmpresa');
    if (local) {
      const data = JSON.parse(local);
      setForm(data);
      atualizarEmpresa(data); 
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const novoForm = { ...form, [name]: value };
    setForm(novoForm);
  };

  const salvar = (e) => {
    e.preventDefault();
    localStorage.setItem('configEmpresa', JSON.stringify(form));
    atualizarEmpresa(form); 
  };

  return (
    <div className="max-h-screen bg-white px-10 py-6 flex gap-10"  style={{ marginLeft: "15%", marginRight:"15%"}}>
      <form onSubmit={salvar} className="max-w-2xl w-full bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-thin mb-8 text-gray-800" style={{ fontSize: '40px', marginLeft: '2%' }}>
          Configurações
        </h1>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Nome da Empresa</label>
            <input
              name="empresa"
              type="text"
              value={form.empresa}
              onChange={handleChange}
              placeholder="Ex: Super Estoque Ltda"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">E-mail</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="empresa@email.com"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Telefone</label>
            <input
              name="telefone"
              type="tel"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">CNPJ</label>
            <input
              name="cnpj"
              type="text"
              value={form.cnpj}
              onChange={handleChange}
              placeholder="00.000.000/0000-00"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Endereço</label>
            <input
              name="endereco"
              type="text"
              value={form.endereco}
              onChange={handleChange}
              placeholder="Rua Exemplo, 123 - Cidade"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Salvar alterações
          </button>
          <button
            type="button"
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Cancelar
          </button>
        </div>
      </form>

      
      <div className="w-full max-w-xl bg-gray-50 border border-gray-200 rounded-xl shadow-md p-10">
        <h2 className="text-2xl font-semibold mb-6">Configurações Salvas</h2>
        <p><strong>Empresa:</strong> {form.empresa}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Telefone:</strong> {form.telefone}</p>
        <p><strong>CNPJ:</strong> {form.cnpj}</p>
        <p><strong>Endereço:</strong> {form.endereco}</p>
      </div>
    </div>
);
}

export default Configuracoesjs;
