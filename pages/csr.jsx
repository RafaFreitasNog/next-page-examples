import { useEffect, useState } from "react";
import styles from '../styles/Csr.module.css'

function ClientSideRendering() {

  const [renderDate, setRenderDate] = useState('');

  useEffect(() => {
    const date = new Date().toISOString()
    setRenderDate(date)
  }, []);

  return ( 
    <>
    <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <div className={styles.mainContent}>
            <h1 className="bold">Page Generated by <span className="blue">CSR</span> method</h1>
            <h4 className="bold">{renderDate}</h4>
            <p>refresh to see the changes</p>
            <h6>This page was generated using the <span className="red">CSR</span> (Client Side Rendering) method, which means the server returns an React component and <span className="red">the user&apos;s brownser</span> is responsible for fetching the data.</h6>
            <h6>When a user requests the page, <span className="red">the app returns a React Component</span>, this concept is the same used in SPAs (Single Page Aplications). This process is done <span className="red">on every single request</span>.</h6>
          </div>
        </div>
      </div>
    </>
   );
}

export default ClientSideRendering;