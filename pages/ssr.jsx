import styles from '../styles/Ssr.module.css'

function ServerSideRendering({ date }) {

  return ( 
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <div className={styles.mainContent}>
            <h1 className="bold">Page Generated by <span className="blue">SSR</span> method</h1>
            <h4 className="bold">{date}</h4>
            <p>refresh to see the changes</p>
            <h6>This page was generated using the <span className="red">SSR</span> (Server Side Rendering) method, which means the page&apos;s HTML is <span className="red">generated on each request</span> by the Next.js aplication</h6>
            <h6>When a user requests the page, the app gethers all the data, generates a HTML page and then serves it to the user. This process is done <span className="red">on every single request</span>.</h6>
          </div>
        </div>
      </div>
    </>
   );
}

export async function getServerSideProps() {
  const date = new Date().toISOString()

  return {
    props: {
      date: date,
    },
  }
}

export default ServerSideRendering;