import { FruitCard } from "@/app/fruits/components";
import { render, screen } from '@testing-library/react';

describe('FruitCard component tests', () => {

    const imageMock = "https://imageTest";
    const nameMock = "nameTest";
    const priceMock = 123;
    const weightMock = 1234;

    const setUp = () => {
        render(
            <FruitCard
                image={imageMock}
                name={nameMock}
                price={priceMock}
                weight={weightMock}
            />,
        )
    }

    test('should render the fruit name with the componente props', () => {
        setUp();

        const fruitName = screen.getByText(nameMock);

        expect(fruitName).toBeInTheDocument();
    })

    test('should render the fruit price with the componente props', () => {
        setUp();

        const fruitPrice = screen.getByText(`$${priceMock} USD`, { collapseWhitespace: true });

        expect(fruitPrice).toBeInTheDocument();
    })

    test('should render the fruit weight with the componente props', () => {
        setUp();

        const fruitWeight = screen.getByText(`${weightMock} KG`, { collapseWhitespace: true });

        expect(fruitWeight).toBeInTheDocument();
    })

    test('should render the fruit image with the componente props', () => {
        setUp();

        const fruitImage = screen.getByAltText(nameMock);

        expect(fruitImage).toBeInTheDocument();
    })
})