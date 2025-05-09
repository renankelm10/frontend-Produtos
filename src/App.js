import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Modal, { contextType } from "react-modal";


export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState("")
  const [marca, setMarca] = useState("")
  const [placadocarro, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [imagem, setImagem] = useState(null);
  const [dados, setDados] = useState([]);
  const [id, setIdSelecionado] = useState('');
  const [modalestaaberto1, setModalAberto1] = React.useState(false);


  

  const login = () => { 
    axios .get("https://impotador-produtos-o8on.onrender.com/login", {params: {email,senha}})

    .then( (response) => { 
        setModalAberto1(true);
        setEmail("");
        setSenha("");
        console.log(response)
    })
  }


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
    .get("https://impotador-produtos-o8on.onrender.com/lista", {params: {},
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
  }

  function abrirModal() {
    setModalAberto1(true);
  }
  function fecharModal() {
    setModalAberto1(false);  
  };

  return (
    <div className="App">
      <img src="https://a-static.mlcdn.com.br/1500x1500/tinta-fosca-pva-azul-celeste-100ml-503-cor-unica-tamanho-100ml-acrilex/lojamormaco/789115302317/cce960652e306273a42822a9c6d4dde4.jpeg" alt="" style={{height:"800px" , width:"860px", marginTop:"4%", marginLeft:"100px", borderRadius: "10px"}}/>
      <div className="BackgroundLogin" style={{marginTop:"-800px"}}>
      <div className="flex flex-col" style={{marginLeft:""}}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} enctype="multipart/form-data" className="flex flex-col items-center">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-mono"
            style={{ marginTop:"40px"}}
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-mono"
            
          />
          
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault(); 
              login(); 
            }}
            className="w-96 py-3 border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Fazer Login
          </button>
        </form>
        </div>
      </div>

      
      <div className="tabela" style={{ 
                marginTop:"-700px", 
                textAlign: "left",
                marginLeft:"720px", 
                maxWidth: "1000px",
                maxHeight: "300px",
                overflowY: "auto",
                
                 }}>
        
        
      </div>

      <Modal
          isOpen={modalestaaberto1}
          onRequestClose={fecharModal}
          contentLabel="Modal de exemplo"
          className="modal-content"
          overlayClassName="modal-overlay"
          style={{
            overlay: {
              backgroundColor: "rgba(45, 45, 45, 0.8)",
            },
            content: {
              background: "white",
              borderRadius: "20px",
              height: "500px",
              width: "1000px",
              position: "absolute",
              marginLeft: "400px",
              marginTop: "160px",
            },
          }}
        >





        </Modal>
        
    </div>
  );
}
{/* <table className="tabela" cellPadding="1" style={{ margin: 'auto', minWidth:"900px" }}>
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
        <td style={{display: "none"}} className="">{ linha.email}</td>
        <td style={{display: "none"}} className="">{ linha.placadocarro}</td>
        <td style={{display: "none"}} className="">{ linha.modelo}</td>
        <td style={{display: "none"}} className="">{ linha.categoria}</td>
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

      <div className="tabela" style={{ 
                marginTop:"50px", 
                textAlign: "left",
                marginLeft:"720px", 
                maxWidth: "1000px",
                maxHeight: "300px",
                overflowY: "auto",
                 }}>
        
        <table className="tabela" cellPadding="1" style={{ margin: 'auto', minWidth:"900px" }}>
          <thead>
            <tr>
              <th style={{textAlign:"left"}}>Pedidos</th>  
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


        </table> */}