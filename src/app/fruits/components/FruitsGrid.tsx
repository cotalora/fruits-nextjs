import styles from './FruitsGrid.module.scss'
import { FruitsGridProps } from './interfaces'


export const FruitsGrid = ({ children }: FruitsGridProps) => {
    return (
        <div className={styles['grid-container']}>
            {children}
        </div>
    )
}
