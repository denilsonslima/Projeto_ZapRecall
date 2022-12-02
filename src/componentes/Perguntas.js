import cards from "../componentes/Cards"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import styled from "styled-components"
import { useState } from "react"

export default function Perguntas({ setTarefas, tarefas }) {
    const [clicado, setClicado] = useState([])
    const [viradas, setViradas] = useState([])
    const [concluida, setConcluido] = useState([])

    function click(index) {
        const contido = clicado.includes(index)

        if (!contido) {
            setClicado([...clicado, index])
        }
    }

    function virar(index) {
        const contido = viradas.includes(index)

        if (!contido) {
            setViradas([...clicado, index])
        }
    }

    function tarefasConcluidas(index, cor) {
        const contido = concluida.includes(index)
        if (!contido) {
            setConcluido([...concluida, index])
            setTarefas(tarefas + 1)
        }
    }
   
    return (
        <>
            {cards.map((e, index) =>
                <div key={index}>
                    <PerguntaFechada
                        finalizado={clicado.includes(index)}
                        concluido={concluida.includes(index)}
                    >
                        <p onClick={() => click(index)}>{`Pergunta ${index + 1}`}</p>
                        <img src={seta_play} alt="" onClick={() => click(index)} />
                    </PerguntaFechada>
                    <PerguntaAberta finalizado={clicado.includes(index)} clicado={viradas.includes(index)}>
                        {e.question}
                        <img src={seta_virar} alt="" onClick={() => virar(index)} />
                    </PerguntaAberta>
                    <PerguntaAberta finalizado={viradas.includes(index)}
                        concluido={concluida.includes(index)}
                    >
                        {e.answer}
                        <div>
                            <button onClick={() => tarefasConcluidas(index, "#FF3030")}>Não lembrei</button>
                            <button onClick={() => tarefasConcluidas(index, "#FF922E")}>Quase não lembrei</button>
                            <button onClick={() => tarefasConcluidas(index, "#2FBE34")}>Zap!</button>
                        </div>
                    </PerguntaAberta>
                </div>)}
        </>

    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.finalizado && !props.concluido ? "none" : "flex"};
    align-items: center;
    justify-content: space-between;
    & p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        padding: 10px 0;
        text-decoration: ${props => props.concluido ? "line-through" : "none"};
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    height: 131px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: ${props => !props.finalizado ? "none" : props.clicado ? "none" : props.concluido ? "none" : "flex"};
    flex-direction: column;
    justify-content: space-between;
    & img{
        padding: 10px;
        position: absolute;
        bottom: 10px;
        right: 10px;
    } 
    & div {
        display: flex;
        justify-content: space-between;
        & button {
            width: 85px;
            height: 37px;
            border-radius: 5px;
            border: none;
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #FFFFFF;
        }
        & :nth-child(1){
            background-color: #FF3030;
        }
        & :nth-child(2){
            background-color: #FF922E;
        }
        & :nth-child(3){
            background-color: #2FBE34;
        }


    }
`