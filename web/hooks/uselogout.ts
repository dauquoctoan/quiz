import { useRouter, usePathname } from 'next/navigation';


const useLogout = () => {
    const router = useRouter();
    const pathName = usePathname();
    return { router, pathName }
}

export default useLogout