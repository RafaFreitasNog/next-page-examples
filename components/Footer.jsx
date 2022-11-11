import { Fragment } from "react";
import styles from '../styles/components/Footer.module.css'

function Footer() {
  return ( 
    <Fragment>
      <div id={styles.footerWrapper}>
        <p>Developed by Raphael Freitas Nogueira de Souza</p>
        <p>email: raphaelfreitas18.dev@gmail.com</p>
        <p>phone number: +55 (11) 975767307</p>
        <p>GitHub: RafaFreitasNog</p>
      </div>
    </Fragment>
   );
}

export default Footer;