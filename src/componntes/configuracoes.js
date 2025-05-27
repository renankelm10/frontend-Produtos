const Configuracoesjs = (FecharEstoque) => {
  return (
    <div className="max-h-screen bg-white px-10 py-6">
  <form className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-10">
    {/* Título */}
    <h1
      className="text-3xl font-thin mb-8 text-gray-800"
      style={{ fontSize: "40px", marginLeft: "2%" }}
    >
      Configurações
    </h1>

    {/* Campos */}
    <div className="grid grid-cols-1 gap-6">
      <div>
        <label className="block text-sm text-gray-600 mb-1">Nome da Empresa</label>
        <input
          type="text"
          placeholder="Ex: Super Estoque Ltda"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">E-mail</label>
        <input
          type="email"
          placeholder="empresa@email.com"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Telefone</label>
        <input
          type="tel"
          placeholder="(00) 00000-0000"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">CNPJ</label>
        <input
          type="text"
          placeholder="00.000.000/0000-00"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Endereço</label>
        <input
          type="text"
          placeholder="Rua Exemplo, 123 - Cidade"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Botões */}
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
</div>

  );
};

export default Configuracoesjs;