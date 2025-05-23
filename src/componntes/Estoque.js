const Estoque = (FecharEstoque) => {
  return (
    <div>
      <form action="">
        <div className="flex flex-row">
          <h1 className="font-thin" style={{ fontSize:"40px", marginLeft:"2%"}}>Adicionar Estoque</h1>
          <spam onclick={FecharEstoque} style={{ marginLeft:'73%', fontSize:"30px", color:'red', cursor:"pointer" }}>X</spam>
        </div>
      
        <div className="flex flex-row">
               <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"10%"}}>Id</h1> 
                <input type="text" className="w-20 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="(opcional)" 
                  style={{marginLeft:"10%", marginRight:"2%"}}/>
                </div>

                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"2.5%"}}>Marca</h1> 
                <input type="text" className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="Marca do produto " 
                  style={{marginLeft:"1%", marginRight:"2%", width:"600px", height:"60px"}}/>
                </div>
                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"2.5%"}}>Tipo</h1> 
                <input type="text" className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="Tipo de material" 
                  style={{marginLeft:"1%", marginRight:"2%", width:"500px", height:"60px"}}/>
                </div>
                

        </div>


        <div className="flex flex-row">
                
                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"10%"}}>Cor </h1> 
                <input type="text" className="w-20 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="De que cor ele é" 
                  style={{marginLeft:"10%", marginRight:"2%", width:"200px", height:"60px"}}/>
                </div>

                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"2.5%"}}>Material</h1> 
                <input type="text" className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="De qual material ele é feito" 
                  style={{marginLeft:"1%", marginRight:"2%", width:"500px", height:"60px"}}/>
                </div>
                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"2.5%"}}>Coleção</h1> 
                <input type="text" className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="A qual coleção pertence" 
                  style={{marginLeft:"1%", marginRight:"2%", width:"400px", height:"60px"}}/>
        
        </div>
          </div>

          <div className="flex flex-row">
                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"2.5%"}}>Descrição</h1> 
                <input type="text" className="w-96 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="Descrição do produto" 
                  style={{marginLeft:"5%", marginRight:"2%", width:"600px", height:"200px"}}/>
                </div>
                <div className="flex flex-row" style={{ padding: "1.5%"}}>
                <h1 className="font-thin" style={{fontSize:"25px", marginTop:"4%"}}>Codigo</h1> 
                <input type="text" className="w-20 py-2 px-4 my-2 text-lg border border-gray-300 rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 text-black font-thin" placeholder="Codigo do produto" 
                  style={{marginLeft:"5%", marginRight:"2%", width:"580px", height:"60px"}}/>
                </div>
            
              <input type="submit" placeholder="Cadastrar" className="w-96  border bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" style={{ marginLeft: "-30%", marginTop:'11%' ,height:"60px"}}/>
            
                
          </div>

          

          
       </form>
      
    </div>
  );
};

export default Estoque;