import { Fragment } from "react";
import styles from '../styles/components/Footer.module.css'

function Footer() {
  return ( 
    <Fragment>
      <div id={styles.footerWrapper}>
        <p>Developed by Raphael Freitas Nogueira de Souza</p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </Fragment>
   );
}

export default Footer;