import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className ={styles.footer}> 
        <p>copyright &copy; FemiEvents 2021</p>
        <p className ={styles.about}>
            <Link href ="/about">About this project</Link>
        </p>
        </footer>
    )
}
