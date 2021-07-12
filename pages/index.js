import React,{useRef} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageHeader from "../src/lib/PageHeader/PageHeader";

import useCustomEvent from "../src/lib/useEvent";

export default function Home() {



  // const data = useEvent("click",increment.current,0,(e,prev) => prev + 1);
  const [ref,data] = useCustomEvent("click",0,(e,next) => {
    console.log("Console");
    return  next+1;
  });

  return (
    <div className={styles.container}>

      <PageHeader title={"Righteous Home"} description={"Righteous Meta Description is good"}/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          useEvent Hook Test in <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div>{data}</div>
            <button ref={ref}>Increment</button>
            <button>Decrement</button>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
