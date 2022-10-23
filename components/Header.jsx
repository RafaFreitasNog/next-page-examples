import Link from "next/link";
import { Fragment } from "react";
import styles from '../styles/Header.module.css'

function Header() {
  return ( 
    <Fragment>
      <div id={styles.headerConteiner}>
        <ul>
          <li><Link href="/"><p>Home</p></Link></li>
          <li><Link href="/ssg"><p>SSG</p></Link></li>
          <li><Link href="/ssr"><p>SSR</p></Link></li>
          <li><Link href="/csr"><p>CSR</p></Link></li>
        </ul>
      </div>
    </Fragment>
   );
}

export default Header;