import styles from "../styles/About.module.css"

export default function About() {
    return(
        <>
            <p className={styles.p}>
                Neighbourhood is a dog friendly refill, 
                coffee & lifestyle store and event space located in the South Side of Glasgow.
                More stuff and words in here and some other things about this n that and maybe things about products.
                More stuff and words in here and some other things about this n that and maybe things about products.</p>
        
            <div className={styles.hoursContainer}>
                <div>
                    <h4>Opening Hours</h4>
                    <ul>
                        <li>Monday/Thursday 09:30-18:30</li>
                        {/* <li>Tuesday 09:30-18:30</li>
                        <li>Wednesday 09:30-18:30</li>
                        <li>Thursday 09:30-18:30</li> */}
                        <li>Friday/Sunday 09:30-17:00</li>
                        {/* <li>Saturday 09:30-17:00</li>
                        <li>Sunday 09:30-17:00</li> */}
                    </ul>
                </div>

                <div>
                    <h4>Location</h4>
                    <p>
                        8 Skirving Street, Glasgow
                    </p>
                </div>
            </div>
        </>
    )
}