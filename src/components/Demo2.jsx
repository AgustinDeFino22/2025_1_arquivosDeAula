import { useState } from "react"
import './Demo2.css'

function Demo2() {
    const [ valor, setValor] = useState(0)
    return (
        <div className="container-demo2">
            <h2>useState</h2>
            <button onClick={() => {setValor(valor - 1)}}>-</button>
            {valor}
            <button onClick={() => {setValor(valor + 1)}}>+</button>
        </div> 
        
    )
}

export default Demo2