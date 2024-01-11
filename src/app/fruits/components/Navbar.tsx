import Image from 'next/image'
import { LogoutButton } from '.'
import { NavbarProps } from './interfaces'
import styles from './Navbar.module.scss'

export const Navbar = ({ userName }: NavbarProps) => {
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['greeting-container']}>
                <Image
                    src='/naranja-icon.webp'
                    alt="Greeting icon"
                    width={40}
                    height={40}
                />
                <div className={styles['greeting-text-container']}>
                    <p className={styles['greeting-text']}>Saludos,</p>
                    <h2 className={styles['greeting-highlighted-text']}>{userName}</h2>
                </div>
            </div>
            
            <LogoutButton />
        </nav>
    )
}
