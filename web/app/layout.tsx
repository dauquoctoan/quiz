import '../styles/globals.css';
import '../styles/variable.css';
import '../styles/icons.css';
import '../styles/loading.css';
import { Providers } from '@/store/providers';
import { Inter } from 'next/font/google';
import SWRProvider from '@/components/commont/swr-provider';
import ProgressLoader from '@/components/ui/ProgressLoader';

const inter = Inter({ subsets: ['vietnamese'] });
export const metadata: any = {
    title: 'Plane',
    description: 'Plane',
    stylesheet:
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <html lang="en">
                <body className={`${inter.className} theme-light`}>
                    <ProgressLoader color="var(--color-special-primary)" />
                    <SWRProvider>{children}</SWRProvider>
                </body>
            </html>
        </Providers>
    );
}
