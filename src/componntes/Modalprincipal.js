import React, { useState } from 'react';
import Estoque from "./Estoque";


const Componente1 = ({ empresa, alternarModal, modalestaaberto3, fecharModal3, pedidos, excluir, dados, Modal, Abrirestoque}) => {

    const [estoqueaberto, setEstoqueAberto] = useState(false); 

    const alternarEstoque = () => {
      setEstoqueAberto(!estoqueaberto);
    };

    
    function FecharEstoque(){ 
      setEstoqueAberto(false);
    };

   return(
     <div>
      
     <div  className="shadow-2xl" style={{ width:"1920px", height:"100px", backgroundColor:"white", marginTop:"80px", marginLeft:"-20px" }}>
                  <div className="flex flex-row">
                  <span onClick={alternarModal} 
        style={{
          fontSize: "60px",
          marginLeft: "20px",
          cursor: "pointer",
        }} 
      >
        <img src="https://cdn-icons-png.flaticon.com/512/54/54206.png" alt=""  style={{ width:"50px", height: "50px", margin:"40%"} } />
      </span>
                    
                    {Array.isArray(empresa) && empresa.slice(0, 1).map((item) => (
                     <h1 style={{marginLeft:"50px", fontSize:"40px", color:"rgb(73, 111, 216)" , marginTop:"15px" , fontFamily:"serif"}} key={item.id}>{item.nome_empresa}</h1>         
      ))}   <spam onClick={alternarModal}  style={{ marginLeft:"-3%" , cursor: "pointer"}}>
          <img  src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="" style={{width:"105px", height: "65px", marginLeft:"1290%", marginTop:"15%", cursor: "pointer"}}/>
      </spam>
                  </div></div>
                 <Modal isOpen={modalestaaberto3}
                onRequestClose={fecharModal3}
                contentLabel="Modal de exemplo"
                className="modal-content"
                overlayClassName="overlay3"
                style={{
                  overlay: {
                    backgroundColor: "rgba(45, 45, 45, 0.8)",
                  },
                  content: {
                    background: "white",
                    borderRadius: "1px",
                    height: "830px",
                    width: "400px",
                    position: "absolute",
                    marginLeft: "",
                    marginTop: "100px",
                    boxShadow: "0px 150px 120px rgba(0, 0, 0, 0.6)",
                    zIndex: 1000,
                  },
                }}>
                  <div className="flex flex-row">

                  </div>

                  <h1 className="w-40  py-2 px-3 my-2 text-lg rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-thin hover:text-blue-500"  onClick={() => {
                                                                                                                                                                                                          alternarEstoque();
                                                                                                                                                                                                          alternarModal();
                                                                                                                                                                                                        }}   style={{fontSize:'32px', marginLeft:"5%", cursor:'pointer'}}>Estoque</h1>
                  <h1 className="w-80 py-2 px-4 my-2 text-lg rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-thin hover:text-blue-500"  style={{fontSize:'32px', marginTop:'5%' ,cursor:'pointer' ,marginLeft:"5%"}}>Adicionar Pedido</h1>
                  <h1 className="w-60 py-2 px-4 my-2 text-lg rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-black font-thin hover:text-blue-500" style={{fontSize:'32px', marginTop:'170%', cursor:'pointer' ,marginLeft:"5%"}}>Configurações</h1>
                 </Modal>


                 <Modal
                 isOpen={estoqueaberto}
                 onRequestClose={FecharEstoque}
                 contentLabel="Modal de exemplo"
                 className="modal-content"
                 overlayClassName="overlay3"
                 style={{
                   overlay: {
                     backgroundColor: "rgba(45, 45, 45, 0.8)",
                   },
                   content: {
                     background: "white",
                     borderRadius: "20px",
                     height: "64.5%",
                     width: "78%",
                     position: "absolute",
                     marginLeft: "11%",
                     marginRight:"10%",
                     marginTop: "10.1%",
                     boxShadow: "0px 150px 120px rgba(0, 0, 0, 0.6)"
                   },
                 }}>

                  {estoqueaberto && <Estoque/>
                  }

                 </Modal>
      
                 
      <div style={{ marginTop:"5%", backdropFilter: "blur(8px)", marginLeft:"10%",marginRight:"10%", height:"600px", 
                      WebkitBackdropFilter: "blur(8px)", 
                       backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius:"20px", boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.3)"}}>
                        <div style={{ 
                          height:"10%",
                          width:"100%",
                          backgroundColor:"white",
                          borderRadius:"20px",
                          WebkitBackdropFilter: "blur(8px)", 
                          backdropFilter: "blur(8px)",

                        }}>

                          <div className="flex flex-row">
                            <h1 style={{ marginLeft:"20%", marginRight:"20%" , fontFamily:"sans-serif" , fontSize:"30px", marginTop:"0.5%",}}>Estoque</h1>
                            <h1 style={{ marginLeft:"25%", marginRight:'20%' , fontFamily:"sans-serif" , fontSize:"30px", marginTop:"0.5%", }}>Pedidos</h1>
                          </div>
                         
                        </div>

      
      <div
                    style={{
                      maxWidth: "40vw",
                      minWidth: "30vw",
                      maxHeight: "500px",
                      minHeight:"499px",
                      overflowY: "auto",
                      border: "",
                      marginLeft: "50%",
                      marginTop:"5%",
                      
                    }}
                  >
                <table className="tabela" cellPadding="1" style={{ margin: '', maxWidth:"", marginTop:"", marginLeft:"100px" }}>
                <thead>
                  <tr>
                    <th style={{textAlign:"left"}}>id</th>  
                    <th style={{textAlign:"left"}}>marca</th>
                    <th style={{textAlign:"left"}}>tipo</th>
                    <th style={{textAlign:"left"}}>cor</th>
                    <th style={{textAlign:"left"}}>material</th>
                    <th style={{textAlign:"left"}}>colecao</th>
                    <th style={{textAlign:"left"}}>codigo</th>
                    <th style={{textAlign:"left"}}>detalhes</th>
      
                    <th></th>
                  </tr>
                </thead>
                <tbody>
            {pedidos && Array.isArray(pedidos) && pedidos.length > 0 ? (
             pedidos.map((linha, index) => (
                <tr key={index} className=" py-2 rounded-x1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                 <td  className="">{ linha.id}</td>
              <td  className="">{ linha.marca}</td>
                 <td  className="">{ linha.tipo}</td>
              <td  className="">{ linha.cor}</td>
              <td  className="">{ linha.material}</td>
              <td  className="">{ linha.colecao}</td>
              <td  className="">{ linha.codigo}</td>
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
                <div
                    style={{
                      maxWidth: "40vw",
                      maxHeight: "500px",
                      minHeight:"499px",
                      overflowY: "auto",
                      border: "",
                      marginLeft: "",
                      marginTop:"-500px"
                    }}
                  >
                <table className="tabela" cellPadding="1" style={{ margin: '', maxWidth:"100px", marginTop:"", marginLeft:"100px" }}>
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
      
      
              </table>
                </div> </div>

     </div>
   );

};
export default Componente1;
