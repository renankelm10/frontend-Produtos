
const AdicionarPedido = ({FecharEstoque}) => {
 
  return (
    <div className="w-full h-full p-8">
  <div className="bg-white rounded-xl shadow-2g p-2 w-full max-w-none h-full">
    <h1 className="text-3xl font-light mb-5">Adicionar Estoque</h1>

    <form className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
      <div>
        <label className="block font-light">Id</label>
        <input type="text" placeholder="(opcional)" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <div>
        <label className="block font-light">Marca</label>
        <input type="text" placeholder="Marca do produto" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>

      <div>
        <label className="block font-light">Tipo</label>
        <input type="text" placeholder="Tipo de material" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
      </div>

      <div>
        <label className="block font-light">Material</label>
        <input type="text" placeholder="De qual material é feito" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>

      <div>
        <label className="block font-light">Cor</label>
        <input type="text" placeholder="De que cor ele é" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>

      <div>
        <label className="block font-light">Coleção</label>
        <input type="text" placeholder="A qual coleção pertence" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>
      
      <div>
        <label className="block font-light">Coleção</label>
        <input type="text" placeholder="A qual coleção pertence" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>

      <div className="blok font-light">
        <label className="block font-light">Código</label>
        <input type="text" placeholder="Código do produto" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>

      <div className="col-span-full">
        <label className="block font-light">Descrição</label>
        <textarea placeholder="Descrição do produto" className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"/>
      </div>

      <div className="col-span-full">
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition">
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>



  );
};

export default AdicionarPedido;