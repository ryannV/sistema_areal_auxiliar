import { useState } from "react";
import Menu from "../reply/Menu";
import Titulo from "../reply/Titulo";
import styles from './Relatorio.module.css';

const Relatorio = () => {
    const [selectedMaquinario, setSelectedMaquinario] = useState("");
    const [selectedTipo, setSelectedTipo] = useState("");
    const [selectedDateStart, setDateStart] = useState(null);
    const [selectedDateFinal, setDateFinal] = useState(null);

    const clearOptions = () => {
        setSelectedMaquinario("");
        setSelectedTipo("");
        setDateStart(null);
        setDateFinal(null);
    }

    return (
        <div>
            <Titulo />
            <section className={styles.container}>
                <Menu />
                <main className={styles.container_second}>
                    <h4>Consulta de Consumo dos Maquinários</h4>
                    <section className={styles.center}>
                        <div className={styles.boxes}>
                            <label htmlFor="maquinario">Maquinário</label>
                            <select className={styles.inputs} id="maquinario" value={selectedMaquinario} onChange={(e) => setSelectedMaquinario(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className={styles.boxes}>
                            <label htmlFor="tipo">Tipo</label>
                            <select className={styles.inputs} id="tipo" value={selectedTipo} onChange={(e) => setSelectedTipo(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className={styles.boxes}>
                            <label htmlFor="start">Data Inicial</label>
                            <input className={styles.inputs} type="date" name="start" id="start" onChange={(e) => setDateStart(e.target.value)}/>
                        </div>
                        <div className={styles.boxes}>
                            <label htmlFor="final">Data Final</label>
                            <input className={styles.inputs} type="date" name="final" id="final" onChange={(e) => setDateFinal(e.target.value)}/>
                        </div>
                    </section>

                    <div className={styles.flex}>
                        <button onClick={clearOptions}>Limpar Seleção</button>
                        <button>Gerar</button>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Relatorio;