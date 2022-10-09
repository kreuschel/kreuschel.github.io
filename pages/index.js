import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/heroSection'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristin Reuschel Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pb-8">
        <div class="mb-4 text-gray-800 text-center lg:text-left">

          <div className={`${styles.heroBackground} md:px-6 py-12 md:px-12`}>
            <div class="max-w-4xl container mx-auto ">
              <div class="grid lg:grid-cols-2 flex items-center">
                <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div className={styles.heroCard}>
                    <h1 className={styles.title}><div className="sm:inline-block">Kristin</div><div className="lg:text-right">Reuschel</div><div className={styles.subtitle}>Curriculum Designer | Program Manager</div></h1>
                  </div>
                </div>
                <div class="md:mb-12 lg:mb-0">
                  <img class="w-full" src="assets/portrait.svg" alt="vector art silhoutte of my head in profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid lg:grid-cols-3 gap-16 mx-16">
          <div className="">
            <h2>About Me</h2><p>With over 10 years of experience designing curriculum and instruction for a range of learners and circumstances, my passion is creating educational experiences that empower individuals to better themselves, their communities, and society.</p>

            <p>Over the past 2 years, I have worked at a nonprofit organization to lead the development of a robust curriculum to teach digital inclusion skills to the next generation of designers and engineers building on 8 years of in-classroom teaching experience in public education. </p>
            <div className=" mt-4"><a className="rounded-full bg-black text-white p-2 mt-4" href="https://www.linkedin.com/in/kristin-reuschel-9b395a112/">Connect on LinkedIn</a></div>
          </div>
          <div className="col-span-2">
            <HeroSection title="Curriculum Development">
              A discussion of my philosophy and methodologies for curriculum design, demonstrated by a case study for the developing the AFB Talent Lab accessibility program.
            </HeroSection>
            <HeroSection title="Program Management">
              A demonstration of my proven program management skills, including project planning, execution strategies, and evaluation of outcomes for internal and external stakeholders.
            </HeroSection>
            <HeroSection title="Instructional Development">
              A breakdown of my instructional planning and delivery process with example case studies from my Pre-IB English and AP English Language and Composition courses.
            </HeroSection>
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
