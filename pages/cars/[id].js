/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../../styles/Car.module.scss'
import fs from 'fs'
import path from 'path'
import {getPathFromFileNames} from '../../utils/pathUtils'
import Header from '../../components/header'

export default function Team(props) {
    const year = props.year
    const name = props.content.name
    const image = props.content.image
    const specs = props.content.specs
    return (
        <div className={styles.main}>
            <Head>
                <title>Car-{` ${year}`} | SRT-Baja</title>
                <meta name="description" content={`${year} car of SASTRA Racing Team - Baja`}/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header page="cars"/>
            <div className={styles.hero}>
                <img src={`/images/${image}`} alt={name}/>
                <h1>{name}</h1>
            </div>
            <div className={styles.specs}>
                {specs.map(spec => (
                    <div key={spec.name} className={styles.spec}>
                        <div className={styles.specsLeft}>
                            <h1>{spec.name}</h1>
                            <img src={`/images/${spec.image}`} alt={spec.name}/>
                        </div>
                        <div className={styles.specsRight}>
                            <ul>
                                {spec.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const databasePath = path.join(process.cwd(), '/database/teams')
    const paths = getPathFromFileNames(databasePath)
    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({params}) {
    const databasePath = path.join(process.cwd(), `/database/cars/${params.id}.json`)
    const json_contents = fs.readFileSync(databasePath, 'utf-8')
    return {
        props: {
            "year": params.id,
            "content": JSON.parse(json_contents)
        }
    }
}