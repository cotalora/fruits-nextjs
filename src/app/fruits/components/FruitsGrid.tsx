import styles from './FruitsGrid.module.scss'
import type { FruitsGridProps } from './interfaces'

export const FruitsGrid = ({ children }: FruitsGridProps) => {
    return (
        <div className={styles['grid-container']}>
            {children}
        </div>
    )
}
