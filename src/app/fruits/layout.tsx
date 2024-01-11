import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Navbar } from "./components";


export const metadata: Metadata = {
    title: 'Fruit List',
    description: 'Fruit list maked with NextJs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    
    const cookieStore = cookies();
    const cookieToken = cookieStore.get('token')?.value ?? '';
    
    if (!cookieToken) {
        redirect('/');
    }

    return (
        <>
            <Navbar userName={cookieToken} />

            {children}
        </>
    )
}