import Link from 'next/link'
import Styles from './home.module.scss'
import Image from 'next/image'
import ReactIcon from "/public/images/react.svg"




function Principal () {
  return(

  <section className={Styles.container}>
    <div className={Styles.left}>
      <div className={Styles.filter}>
         <h1>abubla</h1>
      </div>
    </div>
    <div className={Styles.right}>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={100}> 
        </Image>
        <h3>Bullterrier</h3>
        <p>Docil  amavel  passivo</p>
        <button>adotar</button>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      <div className={Styles.card}>
        <Image src={ReactIcon}
        alt='foto'
        width={150}> 
        </Image>
      </div>
      
    </div>
   </section>

  );

};

export default Principal