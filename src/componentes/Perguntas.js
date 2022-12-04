import cards from "../cards"
import Pergunta from "./Pergunta"

export default function Perguntas({ setTarefas, tarefas }) {
    return (
        <>
            {cards.map((e, index) =>
                <Pergunta
                    key={index}
                    e={e}
                    index={index}
                    setTarefas={setTarefas}
                    tarefas={tarefas}
                />
            )}
        </>

    )
}
