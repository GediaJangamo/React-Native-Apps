import React , {useRef} from "react";
import io from 'socket.io-client';
import './Join.css'


export default function Join({setChatVisibility, setSocket}) {

    const nameUserRef = useRef();

    //funcao verifica o que foi digitado pelo user. se tiver digitado alguma coisa vai acionar a segunda tela( Chat ) que esta oculta

    const handleSubmit = async () => {
        const username = nameUserRef.current.value
        if(!username.trim()) return
        const socket =  await io.connect('http://localhost:3001')
        setSocket(socket)
        
        socket.emit('set_username', username)
         setChatVisibility(true)
    }
    return (
        <div className="BoxChat">
            {/* <h1>Join</h1> */}
            <input type="text"  ref={nameUserRef} placeholder="Mensagem" />
            <button onClick={()=> handleSubmit()}>Enviar</button>
        </div>
    );

}