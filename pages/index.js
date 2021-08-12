/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'

export default function Home(props) {
  
  const landingImage = props.hero_image
  const landingTitle = props.team_name
  const landingQuote = props.team_quote
  const aboutContent = props.about;
  const aboutVideo = props.video;

  return (
    <div className={styles.main}>
      <Head>
        <title>SRT - Baja | Home</title>
        <meta name="description" content="We are the official Baja team of SASTRA University"/>
        <link rel="icon" href="/favicon.png"/>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </Head>
      <div className={styles.landingSection}>
        <div className={styles.landingImage}>
          <img src={`/images/${landingImage}`} alt="Results of Baja 2021" />
        </div>
        <div className={styles.landingTitle}>
          <h1>{landingTitle}</h1>
          <h3>{landingQuote}</h3>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          {aboutContent}
        </div>
        <div className={styles.aboutVideo}>
          <video autoPlay loop>
            <source src={`/videos/${aboutVideo}`}/>
          </video>
        </div>
      </div>
      <div className={styles.socialSection}>
        <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/SRTBAJA?ref_src=twsrc%5Etfw">Tweets by SRTBAJA</a> 
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactMap}>

        </div>
        <div className={styles.contactForm}>
          <form>
            <label>Name</label>
            <input placeholder="Enter Your Name"/>
            <label>Mobile No.</label>
            <input placeholder="Enter Your Mobile No."/>
            <label>Email Id.</label>
            <input placeholder="Enter Your Email-id"/>
            <label>Write To Us..</label>
            <textarea></textarea>
          </form>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const fullPath = path.join(process.cwd(), '/database/home.json')
  const fileContents = fs.readFileSync(fullPath, 'utf-8')

  const contents = JSON.parse(fileContents);

  return {
    props: {
      ...contents
    }
  }
}
