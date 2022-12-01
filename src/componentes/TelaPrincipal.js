import styled from "styled-components";
import Logo from   "../componentes/Logo"
import Perguntas from "../componentes/Perguntas";
import RodaPe from "../componentes/RodaPe";

export default function TelaPrincipal({play}) {
    return (
        <Screen play={play}>
            <Logo />
            <Perguntas />
            <RodaPe />
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
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`