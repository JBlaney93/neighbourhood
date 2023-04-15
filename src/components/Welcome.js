import styles from '@/styles/Home.module.css'

export default function Welcome(){
    return(
        <>
        <div>
            <h1>WELCOME TO
            <span className={styles.neigh}>
                NEIGH
            </span>
            <span className={styles.bour}>
                BOUR
            </span>
            <span className={styles.hood}>
                HOOD
            </span>
            </h1>
        </div>
        </>
    )
}