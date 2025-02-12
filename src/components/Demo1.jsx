import './Demo1.css'
import { FcProcess } from "react-icons/fc";
import { FcLinux } from "react-icons/fc";

function Demo1() {
  function responderClique(){
    alert("Parabéns, vocÊ clicou!")
  }
  return (
    <div className='container-demo1'>
      <button onClick={responderClique}>Clique aqui</button>
      <button onClick={() => {alert("Eu nasci de uma arow function")}}> ➡️ </button>
     <img className='img-dev' src="public/imagens/Programmer-cuate.svg " alt="" />
     <FcProcess  fontSize={50} /> 
     <FcLinux fontSize={50} />
     </div>
  )
}

export default Demo1
