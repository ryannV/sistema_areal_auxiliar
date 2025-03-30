import { useState } from "react";
import Menu from "../reply/Menu";
import Titulo from "../reply/Titulo";
import styles from './Relatorio.module.css';

const Relatorio = () => {
    const [selectedMaquinario, setSelectedMaquinario] = useState(null);
    const [selectedTipo, setSelectedTipo] = useState(null);
    const [selectedQtd, setSelectedQtd] = useState(null);
    const [selectedData, setSelectedData] = useState(null);

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
                </main>
            </section>
        </div>
    )
}

export default Relatorio;