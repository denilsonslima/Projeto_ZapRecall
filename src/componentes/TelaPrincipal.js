import { useState } from "react";
import styled from "styled-components";
import Logo from "../componentes/Logo"
import Perguntas from "../componentes/Perguntas";
import RodaPe from "../componentes/RodaPe";

export default function TelaPrincipal({ play}) {
    const [tarefas, setTarefas] = useState(0)
    const [ico, setIco] = useState([])
    return (
        <Screen play={play}>
            <Logo />
            <Perguntas
                tarefas={tarefas}
                setTarefas={setTarefas}
                ico={ico}
                setIco={setIco}
            />
            <RodaPe
                tarefas={tarefas}
                ico={ico}
            />
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: ${props => !props.play ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px; 
`