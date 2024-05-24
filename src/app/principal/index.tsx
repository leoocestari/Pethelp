import Link from "next/link";
import Styles from "./home.module.scss";
import Image from "next/image";
import ReactIcon from "/public/images/bull.webp";

function Principal() {
  return (
    <section className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.filter}>
          <div className={Styles.topics}>
            <Image
              src={ReactIcon}
              alt="foto"
              width={150}
              style={{ borderRadius: "10px" }}>
              </Image>
            <h1 className={Styles.username}>Leonardo Cestari</h1>
          </div>
          <div className={Styles.topics2}>
            <p>perfil</p>
            <p>anunciar</p>
            <p>adotados</p>
          </div>
        </div>
      </div>

      <div className={Styles.right}>
        <div className={Styles.card}>
          <Image
            src={ReactIcon}
            alt="foto"
            width={170}
            style={{ 'borderRadius': "10px", height:'160px' }}
          ></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
        <div className={Styles.card}>
          <Image src={ReactIcon} alt="foto" width={100}></Image>
          <h3>Bullterrier</h3>
          <p>Docil amavel passivo</p>
          <button>adotar</button>
        </div>
      </div>
    </section>
  );
}

export default Principal;
