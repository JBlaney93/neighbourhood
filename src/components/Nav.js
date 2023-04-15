import styles from "../styles/Nav.module.css"
import Link from "next/link"

export default function Nav() {
    
    return(
        <>
            <nav className={styles.nav}>
                <ul className={styles.navul}>
                    <Link href="#" className={styles.navlink}>
                        HOME
                    </Link>
                    <Link href="#" className={styles.navlink}>
                        ABOUT
                    </Link>
                    <Link href="#" className={styles.navlink}>
                        CONTACT
                    </Link>
                    <Link href="#" className={styles.navlink}>
                        PRODUCTS
                    </Link>
                </ul>
            </nav>
        </>
    )
}