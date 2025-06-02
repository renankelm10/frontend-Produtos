import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Modal, { contextType } from "react-modal";
import React from "react";
import Modalprinciapal from './componntes/Modalprincipal';
import ModalRecuperarSenha from "./componntes/Modalrecuperarsenha"
import PaginadeLogin from "./componntes/PaginadeLogin";



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
  const [pedidos, setPedidos] = useState([]);
  const [id, setIdSelecionado] = useState('');
  const [modalestaaberto1, setModalAberto1] = React.useState(false);
  const [modalestaaberto2, setModalAberto2] = React.useState(false);
  const [modalestaaberto3, setModalAberto3] = React.useState(false);
  const [mensagem, setMensagem] = useState('');
  const [empresa, setEmpresa] = useState([]);
  
  const alternarModal = () => {
    setModalAberto3(!modalestaaberto3);
  };
  
  const login = () => { 
    axios .get("https://localhost:5001/login", {params: {email,senha}})

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
  
  const buscarpedidos = async () => {
    try {
      const response = await axios.get('https://localhost:5001/pedidos');
      setPedidos(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const buscarDados = async () => {
    try {
      const response = await axios.get('https://localhost:5001/dados');
      console.log(response.data)
      setDados(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    buscarDados();
    buscarpedidos();
  }, []);
  useEffect (() => { 
    axios .get("https://localhost:5001/empresa")
    .then((response) => {
      setEmpresa(response.data)
    })
  }, []);

  const excluir = async (id) => {
    try {
      await axios.delete(`https://localhost:5001/excluir/${id}`);
      buscarDados(); 
    } catch (error) {
      console.error('Erro ao excluir dado:', error);
    }
  };

  const handleSubmit = () => {

    axios 
    .get("https://localhost:5001/lista", {params: {},
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
  function abrirModal3() {
    setModalAberto3(true);
  }
  function fecharModal3() {
    setModalAberto3(false);  
  };
  

  return (
    <div className="App">

<PaginadeLogin
  mensagem={mensagem}
  senha={senha}
  setSenha={setSenha}
  abrirModal2={abrirModal2}
  handleSubmit={handleSubmit}
  email={email}
  setEmail={setEmail}
  login={login}
  abrirModal={abrirModal}
/>

    
      <Modal
          isOpen={modalestaaberto2}
          onRequestClose={fecharModal2}
          contentLabel="Modal de exemplo"
          shouldCloseOnEsc={false}
          className="modalRecuperarSenha"
          overlayClassName="modal-overlay2"
          style={{
            overlay: {
              backgroundColor: "rgba(45, 45, 45, 0.8)",
            },
            content: {
              backgroundImage: "white",
              borderRadius: "15px",
              height: "780px",
              width: "860px",
              position: "absolute",
              marginLeft: "960px",
              marginTop: "100px",
            },
          }}
        > <ModalRecuperarSenha
        fecharModal2={fecharModal2}
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        login={login}
      />
        </Modal>

      <Modal isOpen={modalestaaberto1}
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
                    backgroundImage: `url("https://images.unsplash.com/photo-1512273222628-4daea6e55abb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udGFuaGFzJTIwZGUlMjBuZXZlfGVufDB8fDB8fHww")`,
                    backgroundSize: "cover", 
                    borderRadius: "1px",
                    height: "1080px",
                    width: "1920px",
                    position: "absolute",
                    marginLeft: "",
                    marginTop: "-100px",
                  },
                }}
              >

        <Modalprinciapal
          empresa={empresa}
          alternarModal={alternarModal}
          modalestaaberto3={modalestaaberto3}
          fecharModal3={fecharModal3}
          pedidos={pedidos}
          excluir={excluir}
          dados={dados}
          Modal={Modal}
        />
      </Modal>
          

        
    </div>
  );
}