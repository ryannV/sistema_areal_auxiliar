import { useState } from "react";
import Menu from "../reply/Menu";
import Titulo from "../reply/Titulo";
import styles from './Relatorio.module.css';

const Relatorio = () => {
    const [selectedMaquinario, setSelectedMaquinario] = useState("");
    const [selectedTipo, setSelectedTipo] = useState("");
    const [selectedQtd, setSelectedQtd] = useState("");
    const [selectedData, setSelectedData] = useState("");

    const clearOptions = () => {
        setSelectedMaquinario("");
        setSelectedTipo("");
        setSelectedQtd("");
        setSelectedData("");
        console.log('fui clicado');
    }

    return (
        <div>
            <Titulo />
            <section className={styles.container}>
                <Menu />
                <main className={styles.container_second}>
                    <h4>Consulta de Consumo dos Maquinários</h4>
                    <section>
                        <div className={styles.boxes}>
                            <label htmlFor="comboBox">Maquinário</label>
                            <select id="comboBox" value={selectedMaquinario} onChange={(e) => setSelectedMaquinario(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className={styles.boxes}>
                            <label htmlFor="comboBox">Tipo</label>
                            <select id="comboBox" value={selectedTipo} onChange={(e) => setSelectedTipo(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className={styles.boxes}>
                            <label htmlFor="comboBox">Quantidade</label>
                            <select id="comboBox" value={selectedQtd} onChange={(e) => setSelectedQtd(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
                        </div>
                        <div className={styles.boxes}>
                            <label htmlFor="comboBox">Data</label>
                            <select id="comboBox" value={selectedData} onChange={(e) => setSelectedData(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="opcao1">Opção 1</option>
                                <option value="opcao2">Opção 2</option>
                                <option value="opcao3">Opção 3</option>
                            </select>
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