/*
  https://www.youtube.com/watch?v=vIxGDq1SPZQ&t=79s
*/ 

import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Style Yours</title>
        <meta name="description" content="Best women's bag shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>        

      <Main />

    </div>
  )
}
