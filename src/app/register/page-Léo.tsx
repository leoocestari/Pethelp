import Link from 'next/link'
import Styles from './register.module.scss'
import Image from 'next/image'
import Indoor from "/public/images/indoor.svg"


function Register () {
  return(

  <section className={Styles.container}>
    <div className={Styles.grid1}>
    <Link href="/">Volte a pagina inicial</Link>
      <h1>Faça Login ou Registre-se</h1>
      <div className={Styles.image}>
      <Image src={Indoor} width={450} alt='icon'>

      </Image>
      </div>
    
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardlogin}>
        <h1>Acesse ou</h1>
        <a href='./register'>Registre-se</a>
        <div className={Styles.carduser}>
          <label htmlFor= "usuario">Usuario</label>
          <input type='text' name="usuario" placeholder='Usuário'></input>
        </div>
        <div className={Styles.carduser}>
          <label htmlFor= "senha">Senha</label>
          <input type='password' name="senha" placeholder='Senha'></input>
        </div>
        <div className={Styles.carduser}>
          <label htmlFor= "senha">Senha</label>
          <input type='password' name="senha" placeholder='Senha'></input>
        </div>
        <div className={Styles.carduser}>
          <label htmlFor= "senha">Senha</label>
          <input type='password' name="senha" placeholder='Senha'></input>
        </div>
        <div className={Styles.carduser}>
          <label htmlFor= "senha">Senha</label>
          <input type='password' name="senha" placeholder='Senha'></input>
        </div>
        <button className={Styles.button}>entrar</button>
        
      </div>
    </div>

   </section>

  )

}

export default Register