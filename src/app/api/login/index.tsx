import Link from 'next/link'
import Styles from './login.module.scss'
import Image from 'next/image'
import Indoor from "/public/images/indoor.svg"


function Login () {
  return(

  <section className={Styles.container}>
    <div className={Styles.grid1}>
      <h1>Faça Login ou Registre-se</h1>
      <div className={Styles.image}>
      <Image src={Indoor} width={450} alt='icon'>

      </Image>
      </div>
    
    </div>
    <div className={Styles.card}>
      <div className={Styles.cardlogin}>
        <h1>Acessar</h1>
        <div className={Styles.carduser}>
          <label htmlFor= "usuario">Usuario</label>
          <input type='text' name="usuario" placeholder='Usuário'></input>
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

export default Login