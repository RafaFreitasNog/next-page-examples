import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div id={styles.homeWrapper} >
        <div id={styles.homeContent}>
          <h1 className='bold' >Different page generations in Next.js</h1>
          <h4 className='thin'>switch between the <span className="red">pages</span> in the navbar to see more</h4>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
