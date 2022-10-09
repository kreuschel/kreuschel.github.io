import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristin Reuschel Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
  <div class="mb-32 text-gray-800 text-center lg:text-left">

    <div className={`${styles.heroBackground} md:px-6 py-12 md:px-12`}>
      <div class="max-w-4xl container mx-auto ">
        <div class="grid lg:grid-cols-2 flex items-center">
          <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div className={styles.heroCard}>
              <h1 className={styles.title}><div className="sm:inline-block">Kristin</div><div className="lg:text-right">Reuschel</div><span className={styles.subtitle}>Curriculum Designer | Program Manager</span></h1>
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
          <img class="w-full rounded-lg shadow-lg object-center fill-white" src="assets/portrait.svg" alt="vector art silhoutte of my head in profile"/>
          </div>
        </div>
      </div>
    </div>
  </div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
