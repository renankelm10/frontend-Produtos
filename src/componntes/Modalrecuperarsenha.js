
const ModalRecuperarSenha = ({ fecharModal2, handleSubmit, email, setEmail,login }) => {


   return(
     <div>
      
      <div
              class="basis1 transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
              id="botaodefechar" style={{marginTop:"-10px" , marginLeft:"790px", fontSize:"25px", cursor: "pointer", color:"blue"}}
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
            className="w-50 py-3 border bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded mt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Concluir
          </button></div>
          <br />
          
        </form>
        </div>

     </div>
   );

};
export default ModalRecuperarSenha;
