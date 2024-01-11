'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from "next/navigation"
import { setCookie } from 'cookies-next';
import type { LoginCredentials } from './interfaces'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
    
    const router = useRouter();
    const [credentials, setCredentials] = useState<LoginCredentials>({
        userName: '',
        password: ''
    })

    const formIsValid = () => {
        return !!credentials.userName && !!credentials.password
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if(!formIsValid()) return;

        setCookie('token', credentials.userName);
        router.push('/fruits');
    }

    return (
        <form onSubmit={onSubmit} className={styles['form']}>
            <input
                id='username'
                autoComplete='off'
                type="text"
                onChange={(e) => setCredentials({ ...credentials, userName: e.target.value })}
                value={credentials.userName}
                className={styles['input-field']}
                placeholder="Nombre de usuario" />
            <input 
                id='password'
                type="password"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                value={credentials.password}
                className={styles['input-field']}
                placeholder="Contraseña" />
            <button 
                type='submit'
                className={styles['submit-button']}
                disabled={!formIsValid()}
            >
                Iniciar sesión
            </button>
        </form>
    )
}
