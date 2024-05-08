import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.description}>
      <p>
        Indian Mangoes
        <Image
          src="/mango.svg"
          alt="Vercel Logo"
          className={styles.mangoLogo}
          width={50}
          height={50}
          priority
        />
        {/* <code className={styles.code}>app/page.js</code> */}
      </p>
      <div>
        {/* Contact: */}
        <br />
        <div className={styles.contact}>
          {/* Venkat K (+1...) <br />
          Samanth (+1...)
           */}
          <a href="https://chat.whatsapp.com/G0Prxf9NDnzKP0UowXpXbq">
            <Image src="/whatsapp.png" width={50} height={50}></Image>
          </a>
          &nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
