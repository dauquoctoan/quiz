import AuthLayout from '@/layouts/authLayout';
import MainLayout from '@/layouts/mainLayout';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthLayout>
            <MainLayout>{children}</MainLayout>
        </AuthLayout>
    );
}
