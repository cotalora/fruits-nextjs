import { FruitResponse } from "@/app/interfaces";

const fruits: FruitResponse[] = [
    { id: 1, name: 'Manzana', url: '/images/apple.webp', weight: 2, price: 1 },
    { id: 2, name: 'Sandía', url: '/images/watermelon.webp', weight: 3, price: 2 },
    { id: 3, name: 'Cereza', url: '/images/cherry.webp', weight: 5, price: 1 },
    { id: 4, name: 'Melón', url: '/images/melon.webp', weight: 6, price: 3 },
    { id: 5, name: 'Papaya', url: '/images/papaya.webp', weight: 2, price: 1 },
    { id: 6, name: 'Mango', url: '/images/mango.webp', weight: 1, price: 4.5 },
    { id: 7, name: 'Pera', url: '/images/pera.webp', weight: 8, price: 1 },
    { id: 8, name: 'Uva', url: '/images/uva.webp', weight: 6, price: 1 },
    { id: 9, name: 'Guayaba', url: '/images/guayaba.webp', weight: 2, price: 7.5 },
    { id: 10, name: 'Fresa', url: '/images/fresa.webp', weight: 2, price: 1 },
    { id: 11, name: 'Frambuesa', url: '/images/frambuesa.webp', weight: 2, price: 1 },
    { id: 12, name: 'Limón', url: '/images/limon.webp', weight: 2, price: 1 },
    { id: 13, name: 'Mora', url: '/images/mora.webp', weight: 2, price: 1 },
    { id: 14, name: 'Piña', url: '/images/pina.webp', weight: 2, price: 1 },
    { id: 15, name: 'Maracuyá', url: '/images/maracuya.webp', weight: 2, price: 1 },
    { id: 16, name: 'Naranja', url: '/images/naranja.webp', weight: 2, price: 1 },
    { id: 17, name: 'Arándano', url: '/images/arandano.webp', weight: 2, price: 1 },
    { id: 18, name: 'Ciruelas', url: '/images/ciruela.webp', weight: 2, price: 1 },
    { id: 19, name: 'Tomate', url: '/images/tomate.webp', weight: 2, price: 1 },
    { id: 20, name: 'Mandarina', url: '/images/mandarina.webp', weight: 2, price: 1 },
    { id: 21, name: 'Granada', url: '/images/granada.webp', weight: 2, price: 1 },
    { id: 22, name: 'Durazno', url: '/images/durazno.webp', weight: 2, price: 1 },
    { id: 23, name: 'Guanábana', url: '/images/guanabana.webp', weight: 2, price: 1 },
    { id: 24, name: 'Banana', url: '/images/banana.webp', weight: 2, price: 1 },
    { id: 25, name: 'Kiwi', url: '/images/kiwi.webp', weight: 2, price: 1 },
    { id: 26, name: 'Piña', url: '/images/pina.webp', weight: 2, price: 1 },
    { id: 27, name: 'Coco', url: '/images/coco.webp', weight: 2, price: 1 },
    { id: 28, name: 'Pomelo', url: '/images/pomelo.webp', weight: 2, price: 1 },
    { id: 29, name: 'Lulo', url: '/images/lulo.webp', weight: 2, price: 1 },
    { id: 30, name: 'Uchuva', url: '/images/uchuva.webp', weight: 2, price: 1 }
];

export const getFruitsRequest = (): Promise<FruitResponse[]> => {
    return new Promise((resolve) => {
            resolve(fruits);
    })
}
