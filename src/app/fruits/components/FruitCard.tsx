import Image from 'next/image'
import type { FruitCardProps } from './interfaces'
import styles from './FruitCard.module.scss'

export const FruitCard = ({ name, image, price, weight }: FruitCardProps) => {
    return (
        <div className={styles['card-container']}>
            <Image
                className={styles['card-image']}
                src={image}
                width={100}
                height={100}
                alt={name}
            />
            <div className={styles['card-content']}>
                <h3 className={styles['card-title']}>{name}</h3>
                <div className={styles['card-price-weight-container']}>
                    <p className={styles['card-weight']}>{weight} KG</p>
                    <p className={styles['card-price']}>${price} USD</p>
                </div>
                <button className={styles['card-button-add']}>
                    <Image
                        className={styles['button-image']}
                        src='/shopping-cart-icon.webp'
                        width={18}
                        height={18}
                        alt='Shopping-cart'
                    />
                    <span className={styles['button-span']}>Comprar</span>
                </button>
            </div>
        </div>
    )
}
