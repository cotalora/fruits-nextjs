'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import styles from './LogoutButton.module.scss'

export const LogoutButton = () => {

    const router = useRouter();

    const onLogout = () => {
        deleteCookie('token');
        router.push('/');
    }

    return (
        <button
            id='logout-button'
            data-testid='logout-button'
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
