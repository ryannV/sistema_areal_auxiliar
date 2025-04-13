import Input from '../reply/Input';
import Menu from '../reply/Menu';
import Titulo from '../reply/Titulo';
import styles from './Fornecedor.module.css'

const Fornecedor = () => {
    return (
        <div>
            <Titulo />
            <section className={styles.container}>
                <Menu />

                <main className={styles.container_second}>
                    <Input type="text" name="razao" placeholder="Digite sua razão social" htmlfor="razao" label="Razão Social" />
                    <Input type="number" name="cnpj" placeholder="Digite seu CNPJ" htmlfor="cnpj" label="CNPJ" />
                    <Input type="number" name="ie" placeholder="Digite sua Inscrição Estadual" htmlfor="ie" label="Inscrição Estadual" />
                    <Input type="email" name="email" placeholder="Digite seu Email" htmlfor="email" label="Email" />

                    {/* Endereço */}
                    <label style={{ color: "#1a4f77" }} htmlFor="endereco">Endereço</label>
                    <div className={styles.flex}>
                        <Input type='text' name='rua' placeholder='Rua' htmlfor='' label='' />
                        <Input type='text' name='bairro' placeholder='Bairro' htmlfor='' label='' />
                    </div>
                    <div className={styles.flex}>
                        <Input type='number' name='cep' placeholder='CEP' htmlfor='' label='' />
                        <Input type='text' name='cidade' placeholder='Cidade' htmlfor='' label='' />
                        <Input type='text' name='Estado' placeholder='Estado' htmlfor='' label='' />
                        <Input type='number' name='numero' placeholder='Número' htmlfor='' label='' />
                    </div>

                    {/* Buttons */}
                    <div className={styles.botao}>
                        <button>Limpar</button>
                        <button>Cadastrar</button>
                    </div>
                </main>

            </section>
        </div>
    )
}

export default Fornecedor;