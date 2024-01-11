import Image from 'next/image'
import { LoginForm } from './components'
import styles from './page.module.scss'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default function LoginPage() {

    const cookieStore = cookies();
    const cookieToken = cookieStore.get('token')?.value ?? '';
    
    if (!!cookieToken) {
        redirect('/fruits');
    }

    return (
        <main className={styles['main-container']}>
            <div className={styles['form-container']}>
                <div className={styles['form-title']}>
                        <Image
                            src='/naranja-icon.webp'
                            alt='Login'
                            width={60}
                            height={60}
                        />
                        <div className={styles['title-description-container']}>
                            <h1 className={styles['title']}>E-Fruit</h1>
                            <p className={styles['description']}>Bienvenido a nuestro sistema de comprar de frutas.</p>
                        </div>
                </div>
                <LoginForm />
            </div>
        </main>
    )
}