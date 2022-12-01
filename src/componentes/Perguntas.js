import cards from "../componentes/Cards"
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"
import styled from "styled-components"
import { useState } from "react"

export default function Perguntas() {
    const [clicado, setClicado] = useState([])
    const [viradas, setViradas] = useState([])

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

    return (
        <>
            {cards.map((e, index) =>
                <div key={index}>
                    <PerguntaFechada
                        finalizado={clicado.includes(index)}
                        >
                        <p onClick={() => click(index)}>{`Pergunta ${index + 1}`}</p>
                        <img src={seta_play} alt="" onClick={() => click(index)} />
                    </PerguntaFechada>
                    <PerguntaAberta finalizado={clicado.includes(index)} clicado={viradas.includes(index)}>
                        {e.question}
                        <img src={seta_virar} alt="" onClick={() => virar(index)} />
                    </PerguntaAberta>
                    <PerguntaAberta finalizado={viradas.includes(index)}>
                        {e.answer}
                    </PerguntaAberta>
                </div>)}
        </>

    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.finalizado ? "none" : "flex"};
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
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
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
    display: ${props => !props.finalizado || props.clicado ? "none" : "flex"};
    flex-direction: column;
    justify-content: space-between;
    & img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`