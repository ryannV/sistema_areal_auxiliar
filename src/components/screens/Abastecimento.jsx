import React, { useState } from "react";
import Menu from "../reply/Menu";
import Titulo from "../reply/Titulo";
import styles from "./Abastecimento.module.css";

const Abastecimento = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Titulo />
      <section className={styles.container}>
        <Menu />

        <main className={styles.container_second}>
          <div className={styles.boxes}>
            <label htmlFor="comboBox">Maquinário</label>
            <select className={styles.inputs} id="comboBox" value={selectedOption} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
              <option value="opcao3">Opção 3</option>
            </select>

            <button className={styles.botao}>Limpar</button>
          </div>

          <div className={styles.boxes}>
            <label htmlFor="qtd">Quantidade</label>
            <input className={styles.inputs} type="number" id="qtd"/>

            <button className={styles.botao}>Confirmar</button>
          </div>

        </main>
      </section>
    </div>
  );
};

export default Abastecimento;
