import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import  Carousel  from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Car() {
  return (
    <div className={styles.hp}>
      <div className={styles.ps}>
      <Image src='/car2.jpg' width="1500" height="800" />
    </div>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WELCOME TO CAR BIKE COMPANY
        </h1>

        

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/img4.webp" width="200" height="180px" />
            <h2>Scorpio</h2>
            <p>Automatic</p>
            <h4>RS 20.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="#">View details</a>
            </div>
            </div>
            <div className={styles.card}>
            <Image src="/img2.webp" width="200" height="180px" />
            <h2>Forturner</h2>
            <p>Manual</p>
            <h4>RS 25.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="#">View details</a>
            </div>
            </div>
            <div className={styles.card}>
            <Image src="/img1.webp"  width="200" height="180px" />
            <h2>Renault joe</h2>
            <p>Automatic</p>
            <h4>RS 8.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="#">View details</a>
            </div>
            </div>
            <div className={styles.card}>
            <Image src="/img3.webp" width="200" height="180px" />
            <h2>Tata Curvv</h2>
            <p>Automatic</p>
            <h4>RS 20.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="#">View details</a>
            </div>
            </div>
            </div>
            </main>
            </div>
            </div>
  )
}