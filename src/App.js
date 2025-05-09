import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Modal, { contextType } from "react-modal";
import React from "react";


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
  const [modalestaaberto2, setModalAberto2] = React.useState(false);
  const [mensagem, setMensagem] = useState('');


  

  const login = () => { 
    axios .get("https://impotador-produtos-o8on.onrender.com/login", {params: {email,senha}})

    .then( (response) => { 
        setModalAberto1(true);
        setEmail("");
        setSenha("");
        console.log(response)
        setMensagem("")
    
    }).catch ((error) =>  {
      setMensagem("Email ou Senha incorretos")
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
  function abrirModal2() {
    setMensagem("")
    setModalAberto2(true);
  }
  function fecharModal2() {
    setModalAberto2(false);  
  };

  return (
    <div className="App">
      <img src="https://a-static.mlcdn.com.br/1500x1500/tinta-fosca-pva-azul-celeste-100ml-503-cor-unica-tamanho-100ml-acrilex/lojamormaco/789115302317/cce960652e306273a42822a9c6d4dde4.jpeg" alt="" style={{height:"800px" , width:"860px", marginTop:"4%", marginLeft:"100px", borderRadius: "10px"}}/>
      <div className="BackgroundLogin" style={{marginTop:"-800px"}}>
      <div className="flex flex-col" style={{marginLeft:""}}>
        <h1>Login</h1>
        <h1 style={{fontSize:"17px", color:"red", marginTop:"10px"}}>{mensagem}</h1>
        <form onSubmit={handleSubmit} enctype="multipart/form-data" className="flex flex-col items-center">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-thin"
            style={{ marginTop:"40px"}}
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-thin"
            
          />
          <h1 onClick={abrirModal2} style={{ marginLeft:"250px",fontSize:"14px", color:"blue", cursor:"pointer"}}>Esqueci Minha Senha</h1>
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
          <br />
          
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
          isOpen={modalestaaberto2}
          onRequestClose={fecharModal2}
          contentLabel="Modal de exemplo"
          shouldCloseOnEsc={false}
          className="modal-content"
          overlayClassName="modal-overlay2"
          style={{
            overlay: {
              backgroundColor: "rgba(45, 45, 45, 0.8)",
            },
            content: {
              background: "white",
              borderRadius: "15px",
              height: "800px",
              width: "860px",
              position: "absolute",
              marginLeft: "960px",
              marginTop: "-100px",
            },
          }}
        >
          <div
              class="basis1 transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
              id="botaodefechar" style={{marginTop:"10px" , marginLeft:"790px", fontSize:"25px", cursor: "pointer", color:"blue"}}
            >
              <span onClick={fecharModal2}>X</span>
            </div>
          
      <div className="flex flex-col" style={{marginLeft:""}}>
        <h1 style={{marginLeft:"260px", fontSize:"45px", marginTop:"190px"}}> Resetar Senha</h1>
        <br />
        <h1 style={{fontSize:"23px", color:"gray", marginLeft:"210px"}}>Digite seu email para resetar sua senha</h1>
        <form onSubmit={handleSubmit} enctype="multipart/form-data" className="flex flex-col items-center">
          <div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin"
            style={{ marginTop:"40px", marginRight:"10px"}}
          />
          
          <button
          style={{marginTop:"20px", borderRadius:"12px"}}
            type="submit"
            onClick={(e) => {
              e.preventDefault(); 
              login(); 
            }}
            className="w-50 py-3 border bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Concluir
          </button></div>
          <br />
          
        </form>
        </div>
      
      

        </Modal>

      <Modal
          isOpen={modalestaaberto1}
          onRequestClose={fecharModal}
          contentLabel="Modal de exemplo"
          className="modal-content"
          shouldCloseOnEsc={false}
          overlayClassName="modal-overlay"
          style={{
            overlay: {
              backgroundColor: "rgba(45, 45, 45, 0.8)",
            },
            content: {
              background: "white",
              borderRadius: "1px",
              height: "1080px",
              width: "1920px",
              position: "absolute",
              marginLeft: "",
              marginTop: "-100px",
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