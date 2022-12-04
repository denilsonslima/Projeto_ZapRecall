import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_certo from "../assets/img/icone_certo.png"
import styled from "styled-components"
import { useState } from "react"

export default function Pergunta({ tarefas, setTarefas, index, e }) {
    const [clicado, setClicado] = useState(0)
    const [cor, setCor] = useState("#333333")
    const [icon, setIcon] = useState(seta_play)

    return (
        <div data-test="flashcard">
            <PerguntaFechada
                data-test="flashcard-text"
                clicado={clicado === 0 || clicado === 3}
                finalizado={clicado === 3}
                cor={cor}
            >
                <p onClick={() => setClicado(true)}>{`Pergunta ${index + 1}`}</p>
                <img data-test="play-btn" src={icon} alt="" onClick={() => {
                    if (clicado < 3) {
                        setClicado(clicado + 1)
                    }
                }} />
            </PerguntaFechada>
            <PerguntaAberta data-test="flashcard-text" clicado={clicado === 1}>
                {e.question}
                <img data-test="turn-btn" src={seta_virar} alt="" onClick={() => setClicado(clicado + 1)} />
            </PerguntaAberta>
            <PerguntaAberta data-test="flashcard-text" clicado={clicado === 2}>
                {e.answer}
                <div>
                    <button data-test="no-btn" onClick={() => {
                        setCor("#FF3030")
                        setClicado(clicado + 1)
                        setTarefas(tarefas + 1)
                        setIcon(icone_erro)
                    }
                    }>Não lembrei
                    </button>

                    <button data-test="partial-btn" onClick={() => {
                        setCor("#FF922E")
                        setClicado(clicado + 1)
                        setTarefas(tarefas + 1)
                        setIcon(icone_quase)
                    }}>Quase não lembrei
                    </button>

                    <button data-test="zap-btn" onClick={() => {
                        setCor("#2FBE34")
                        setClicado(clicado + 1)
                        setTarefas(tarefas + 1)
                        setIcon(icone_certo)
                    }}>Zap!
                    </button>
                </div>
            </PerguntaAberta>
        </div>
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
    display: ${props => props.clicado ? "flex" : "none"};
    align-items: center;
    justify-content: space-between;
    & p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.finalizado ? props.cor : "#333333"};
        padding: 10px 0;
        text-decoration: ${props => props.finalizado ? "line-through" : "none"};
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 131px;
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
    display: ${props => props.clicado ? "flex" : "none"};
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
        margin-top: 15px;
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