import cards from "../cards"
import Pergunta from "./Pergunta"

export default function Perguntas({ setTarefas, tarefas, ico, setIco}) {
    return (
        <>
            {cards.map((e, index) =>
                <Pergunta
                    key={index}
                    e={e}
                    index={index}
                    setTarefas={setTarefas}
                    tarefas={tarefas}
                    ico={ico}
                    setIco={setIco}
                />
            )}
        </>

    )
}
