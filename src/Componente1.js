const Componente1 = () => {

   return(
     <div>
      
     <div style={{ width:"1920px", height:"100px", backgroundColor:"gray", marginTop:"80px", marginLeft:"-20px" }}>
                  <div className="flex flex-row">
                  <span
        style={{
          fontSize: "60px",
          marginLeft: "20px",
          cursor: "pointer",
        }}
        onClick={alternarModal}
      >
        ☰
      </span>
                    {Array.isArray(empresa) && empresa.slice(0, 1).map((item) => (
                     <h1 style={{marginLeft:"50px", fontSize:"40px", color:"white"}} key={item.id}>{item.nome_empresa}</h1>
      ))}
                  </div></div>
                 <Modal isOpen={modalestaaberto3}
                onRequestClose={fecharModal3}
                contentLabel="Modal de exemplo"
                className="modal-content"
                overlayClassName="modal-overlay3"
                style={{
                  overlay: {
                    backgroundColor: "rgba(45, 45, 45, 0.8)",
                  },
                  content: {
                    background: "lightblue",
                    borderRadius: "1px",
                    height: "830px",
                    width: "400px",
                    position: "absolute",
                    marginLeft: "",
                    marginTop: "100px",
                  },
                }}>
                 </Modal>
      
                 
      
      <div
                    style={{
                      maxWidth: "40vw",
                      minWidth: "30vw",
                      maxHeight: "500px",
                      minHeight:"499px",
                      overflowY: "auto",
                      border: "",
                      marginLeft: "1200px",
                      marginTop:"22%"
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
                      marginLeft: "600px",
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
                </div>

     </div>
   )
} 