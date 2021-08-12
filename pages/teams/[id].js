/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../../styles/Team.module.scss'
import fs from 'fs'
import path from 'path'
import {getPathFromFileNames} from '../../utils/pathUtils'

export default function Team(props) {
    const year = props.year
    const subsystems = props.content
    return (
        <div className={styles.main}>
            <Head>
                <title>Team-{`${year}`} | SRT-Baja</title>
                <meta name="description" content={`Members of SASTRA Racing Team - Baja in the year ${year}`}/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <div className={styles.title}><h1>Team-{`${year}`}</h1></div>
            <div className={styles.contents}>
                {subsystems.map((subsystem, i) => (
                    <div key={i} className={styles.subsystem}>
                        <h1>{subsystem.subsystem}</h1>
                        <div className={styles.members}>
                            {subsystem.members.map(member => (
                                <div key={member.name} className={styles.member}>
                                    <img src={`/images/${member.profilePic}`} alt={member.name}/>
                                    <h3>{member.name}</h3>
                                    <h3>{member.title}</h3>
                                </div>
                            ))}
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
    const databasePath = path.join(process.cwd(), `/database/teams/${params.id}.json`)
    const json_contents = fs.readFileSync(databasePath, 'utf-8')
    return {
        props: {
            "year": params.id,
            "content": JSON.parse(json_contents)
        }
    }
}