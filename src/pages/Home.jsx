import { useEffect, useState } from "react"
import styles from './Home.module.css';

{/*import Navigation from "../components/nav/Navigation"
import Overview from "../components/Overview"*/ }

const Home = (props) => {
    const [user, setUser] = useState()

    {/* const [component, setComponent] = useState(<Overview />) */ }

    useEffect(() => {
        const token = localStorage.getItem('token')
        setUser(token)
    }, [])
    return (
        <structure className={styles.clsStructure}>
            {/*
            <Navigation setcomponent={setComponent} />
            {component}
    */}
            <div></div>
            <article>
                <div className={styles.clsTopHeader}> <h2>Home</h2>
                </div>
                <h4> Good Morning</h4>
                <p>We hope you have a good day</p>
                <div className="clsTopHomeYogaMeditation"><div> </div><div></div></div>
                <div className="clsHomeSearch"><input type="text" /></div>
                <div className="clsRecommendedYoga"></div>
                <div className="clsRecommendedMeditation"></div>
            </article>

            <div></div>

        </structure>

    )
}

export default Home