
const  PaginadeLogin = ({ mensagem, senha, setSenha, abrirModal2, handleSubmit, email, setEmail, login}) => {


   return(
     <div>
      
      <img src="https://images.unsplash.com/photo-1512273222628-4daea6e55abb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udGFuaGFzJTIwZGUlMjBuZXZlfGVufDB8fDB8fHww" alt="" style={{height:"800px" , width:"860px", marginTop:"4%", marginLeft:"100px", borderRadius: "10px"}}/>
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
            placeholder="Senha"
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

     </div>
   );

};
export default PaginadeLogin;
