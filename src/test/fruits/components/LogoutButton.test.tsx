import { LogoutButton } from "@/app/fruits/components";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";


jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}));

describe('LogoutButton component tests', () => {

    const setUp = () => {
        render(
            <LogoutButton />
        )
    }

    test('should exec the push method when logout button is pressed', () => {
        const pushMock = jest.fn();

        (useRouter as jest.Mock).mockReturnValue({ push: pushMock })
        setUp();

        const logoutButton = screen.getByTestId('logout-button');
        logoutButton.click();

        expect(pushMock).toHaveBeenCalled()
    })
})