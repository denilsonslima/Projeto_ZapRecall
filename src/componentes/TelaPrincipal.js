import { useState } from "react";
import styled from "styled-components";
import Logo from "../componentes/Logo"
import Pergunta from "../componentes/Perguntas";
import RodaPe from "../componentes/RodaPe";

export default function TelaPrincipal({ play}) {
    const [tarefas, setTarefas] = useState(0)
    return (
        <Screen play={play}>
            <Logo />
            <Pergunta
                tarefas={tarefas}
                setTarefas={setTarefas}
            />
            <RodaPe
                tarefas={tarefas}
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