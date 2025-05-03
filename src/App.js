import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [placadocarro, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [imagem, setImagem] = useState(null);
  const [dados, setDados] = useState([]);
  const [id, setIdSelecionado] = useState('');

  const buscarDados = async () => {
    try {
      const response = await axios.get('https://impotador-produtos-o8on.onrender.com/dados');
      setDados(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    buscarDados();
  }, []);


  const excluir = async (id) => {
    try {
      await axios.delete(`https://impotador-produtos-o8on.onrender.com/excluir/${id}`);
      buscarDados(); 
    } catch (error) {
      console.error('Erro ao excluir dado:', error);
    }
  };

  const handleSubmit = () => {

    axios 
    .get("https://impotador-produtos-o8on.onrender.com/lista", {params: { email, placadocarro, modelo, categoria, detalhes,imagem},
   })
   .then((response) => { 
    
    setEmail('');
    setCategoria("");
    setModelo('');
    setPlaca("");
    setDetalhes("");
    
    console.log(response)
    buscarDados()
   })
    
  };

  return (
    <div className="App">
      <div className="BackgroundLogin">
      <div className="flex flex-col" style={{marginLeft:"-980px"}}>
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit} enctype="multipart/form-data" className="flex flex-col items-center">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Marca"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-mono"
            style={{ marginTop:"40px"}}
          />
          <input
            type="text"
            value={placadocarro}
            onChange={(e) => setPlaca(e.target.value)}
            placeholder="Placa do Carro"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-mono"
            
          />
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Modelo"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-mono"
            
          />
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Categoria"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-monod"
           
          />
          <textarea
            type="text"
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            placeholder="Detalhes"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-mono"
            
          /><label for="file-upload" class="custom-file-upload" className="border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Escolher Imagem</label>
          <input
            type="file"
            onChange={(e) => setImagem(e.target.files[0])}
            className="custom-file-upload"
            id="file-upload"
            accept="image/*"
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault(); 
              handleSubmit(); 
            }}
            className="w-96 py-3 border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Enviar Cadastro
          </button>
        </form>
        </div>
      </div>

      
      <div className="tabela" style={{ 
                marginTop:"-610px", 
                textAlign: "left",
                marginLeft:"720px", 
                maxWidth: "1000px",
                maxHeight: "500px",
                overflowY: "auto",
                
                 }}>
        
        <table className="tabela" cellPadding="1" style={{ margin: 'auto', minWidth:"900px" }}>
          <thead>
            <tr>
              <th style={{textAlign:"left"}}>Marca</th>
              <th style={{textAlign:"left"}}>Placa</th>
              <th style={{textAlign:"left"}}>Modelo</th>
              <th style={{textAlign:"left"}}>Categoria</th>
              <th style={{textAlign:"left"}}>Detalhes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
  {dados && Array.isArray(dados) && dados.length > 0 ? (
    dados.map((linha, index) => (
      <tr key={index} className=" py-2 rounded-x1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <td  className="">{ linha.email}</td>
        <td  className="">{ linha.placadocarro}</td>
        <td  className="">{ linha.modelo}</td>
        <td  className="">{ linha.categoria}</td>
        <td  className="">{ linha.detalhes}</td>
       <td> <button style={{marginTop: "-10px"}}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={(e) => {
  e.preventDefault(); 
  excluir(linha.id);  
}}>Excluir</button></td>

      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" style={{ textAlign: "center" }}>
        Nenhum dado encontrado.
      </td>
    </tr>
  )}
</tbody>


        </table>
      </div>
    </div>
  );
}
