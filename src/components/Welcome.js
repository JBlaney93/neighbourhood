import styles from '@/styles/Home.module.css'

export default function Welcome(){
    return(
        <>
        <div className={styles.welcomediv}>
            <h1>WELCOME TO
            <span className={styles.pink}>
                NEIGH
            </span>
            <span className={styles.orange}>
                BOUR
            </span>
            <span className={styles.yellow}>
                HOOD
            </span>
            </h1>
            <h2 className={styles.pink}>LOW IMPACT</h2>
            <h2 className={styles.yellow}>LIFE STORE</h2>
        </div>
        </>
    )
}