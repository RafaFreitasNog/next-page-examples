import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Isr.module.css"

function IncrementalStaticRegeneration({ date }) {
  return ( 
    <>
    <Header/>
    <div className={styles.pageWrapper}>
        <div className={styles.pageContent}>
          <div className={styles.mainContent}>
            <h1 className="bold">Page Generated by <span className="blue">ISR</span> method</h1>
            <h4 className="bold">{date}</h4>
            <p>refresh to see the changes</p>
            <h6>The <span className="red">ISR (Incremental Static Regeneration)</span> method works just like the Static Site Generation, as the page is statically generated at build time. With the difference beeing the <span className="red">revalidate</span> property informed at <span className="blue">getStaticProps</span></h6>
            <h6>You can specify a time in seconds in wich the page should regenerate, in this case 60 seconds. Every time 60 seconds passes, it fetches the data in getStaticProps again and generates a new static version of itself.</h6>
          </div>
        </div>
      </div>
    <Footer/>
    </>
   );
}

export async function getStaticProps() {
  const date = new Date().toISOString()

  return {
    props: {
      date,
    },
    revalidate: 60,
  }
}

export default IncrementalStaticRegeneration;