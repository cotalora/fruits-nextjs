'use client'

import Image from 'next/image'
import styles from './LogoutButton.module.scss'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export const LogoutButton = () => {

    const router = useRouter();

    const onLogout = () => {
        deleteCookie('token');
        router.push('/');
    }

    return (
        <button
            className={styles['logout-button']}
            onClick={onLogout}
        >
            <Image
                className={styles['logout-icon']}
                src='/logout-icon.svg'
                alt="Logout"
                width={20}
                height={20}
            />
        </button>
    )
}
