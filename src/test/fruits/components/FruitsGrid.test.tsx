import { FruitsGrid } from "@/app/fruits/components";
import { render, screen } from "@testing-library/react";

describe('FruitGrid component tests', () => {

    const setUp = () => {
        render(
            <FruitsGrid>
                <div>Component test</div>
            </FruitsGrid>,
        )
    }

    test('should render the child component', () => {
        setUp();

        const componentContent = screen.getByText('Component test');

        expect(componentContent).toBeInTheDocument();
    })
})