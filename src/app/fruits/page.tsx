
import { getFruitsRequest } from '../api/fruits/fruitsService';
import { Fruit, FruitResponse } from '../interfaces';
import { FruitCard, FruitsGrid } from './components'
import styles from './page.module.scss'

const getFruits = async (): Promise<Fruit[]> => {
    const fruitsResponded: FruitResponse[] = await getFruitsRequest();

    const fruits: Fruit[] = fruitsResponded.map(fruit => ({
        id: fruit.id,
        image: fruit.url,
        name: fruit.name,
        price: fruit.price,
        weight: fruit.weight
    }))

    return fruits;
}

export default async function FruitsPage() {

    const fruits = await getFruits();

    return (
        <main className={styles['main-container']}>
            <FruitsGrid>
                {
                    fruits.map(fruit => (
                        <FruitCard
                            key={fruit.id}
                            name={fruit.name}
                            image={fruit.image}
                            price={fruit.price}
                            weight={fruit.weight}
                        />
                    ))
                }
            </FruitsGrid>
        </main>
    )
}