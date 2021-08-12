/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import fs from 'fs'
import path from 'path'
import {useEffect} from 'react'
import { Loader } from "@googlemaps/js-api-loader"

export default function Home(props) {

  useEffect( () => {
    var youtube = document.getElementById('youtube-player');
    var width = window.innerWidth > 800 ? window.innerWidth*0.55 : window.innerWidth;
    youtube.width = width;
    youtube.height = width*9/16;
    console.log(width);

    const loader = new Loader({
      apiKey: "AIzaSyBRrz4Do0NpF-6klIuoG-UAKSQnyDpVPmo",
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        // styles: [
        //   { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        //   { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        //   { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        //   {
        //     featureType: "administrative.locality",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#d59563" }],
        //   },
        //   {
        //     featureType: "poi",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#d59563" }],
        //   },
        //   {
        //     featureType: "poi.park",
        //     elementType: "geometry",
        //     stylers: [{ color: "#263c3f" }],
        //   },
        //   {
        //     featureType: "poi.park",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#6b9a76" }],
        //   },
        //   {
        //     featureType: "road",
        //     elementType: "geometry",
        //     stylers: [{ color: "#38414e" }],
        //   },
        //   {
        //     featureType: "road",
        //     elementType: "geometry.stroke",
        //     stylers: [{ color: "#212a37" }],
        //   },
        //   {
        //     featureType: "road",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#9ca5b3" }],
        //   },
        //   {
        //     featureType: "road.highway",
        //     elementType: "geometry",
        //     stylers: [{ color: "#746855" }],
        //   },
        //   {
        //     featureType: "road.highway",
        //     elementType: "geometry.stroke",
        //     stylers: [{ color: "#1f2835" }],
        //   },
        //   {
        //     featureType: "road.highway",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#f3d19c" }],
        //   },
        //   {
        //     featureType: "transit",
        //     elementType: "geometry",
        //     stylers: [{ color: "#2f3948" }],
        //   },
        //   {
        //     featureType: "transit.station",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#d59563" }],
        //   },
        //   {
        //     featureType: "water",
        //     elementType: "geometry",
        //     stylers: [{ color: "#17263c" }],
        //   },
        //   {
        //     featureType: "water",
        //     elementType: "labels.text.fill",
        //     stylers: [{ color: "#515c6d" }],
        //   },
        //   {
        //     featureType: "water",
        //     elementType: "labels.text.stroke",
        //     stylers: [{ color: "#17263c" }],
        //   },
        // ],
      });
    })
  },[]);
  
  const landingImage = props.hero_image
  const landingTitle = props.team_name
  const landingQuote = props.team_quote
  const aboutContent = props.about;

  return (
    <div className={styles.main}>
      <Head>
        <title>SRT - Baja | Home</title>
        <meta name="description" content="We are the official Baja team of SASTRA University"/>
        <link rel="icon" href="/favicon.png"/>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </Head>
      <div className={styles.landingSection}>
        <div className={styles.landingImage}>
          <img src={`/images/${landingImage}`} alt="Results of Baja 2021" />
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <img src={'/images/SRT_LOGO_icon.png'} alt="SRT-Baja" />
          <p>{aboutContent}</p>
        </div>
      </div>
      <div className={styles.socialSection}>
        <div className={styles.youtubeEmbed}>
          <iframe width="0" height="0" id="youtube-player" src="https://www.youtube.com/embed/VpCr8GO6dOA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className={styles.twitterEmbed}>
          <a className="twitter-timeline" data-theme="light" href="https://twitter.com/SRTBAJA?ref_src=twsrc%5Etfw">Tweets by SRTBAJA</a> 
        </div>
      </div>
      <div className={styles.contactSection}>
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
        <div className={styles.contactMap} id="map">

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
