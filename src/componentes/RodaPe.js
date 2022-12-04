import styled from "styled-components"
import cards from "../cards"
import icone_erro from "../assets/img/icone_erro.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_certo from "../assets/img/icone_certo.png"

export default function RodaPe({ tarefas, ico}) {
  return (
    <Footer data-test="footer">
      {tarefas}/{cards.length} Concluidos
      <div>
        {ico.map((a,i) => <Icon key={i} a={a}/>)}
      </div>
    </Footer>
  )
}

function Icon({a}) {
  return (
    <>
    <img src={a === "icone_erro" ? icone_erro : a === "icone_quase" ? icone_quase : a === "icone_certo" ? icone_certo : ""} alt="" />
    </>
  )
}

const Footer = styled.div`
  width: 100vw;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  & div {
    margin-top: 10px;
    & img {
      margin-right: 5px;
    }
    & :last-child {
      margin-right: 0px;
    }
  }
`