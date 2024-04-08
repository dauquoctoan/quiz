'use client';
import { ReactNode, memo } from 'react';
import { SWRConfig } from 'swr';
import { useRouter, usePathname } from 'next/navigation';
import authService from '@/services/auth-services';
import { authSlice, useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import useLogout from '@/hooks/uselogout';

export interface ISWRProvide {
    children: ReactNode;
}

const SWRProvider = ({ children }: ISWRProvide) => {
    const dispatch = useDispatch();
    const { pathName, router } = useLogout();
    const info = useSelector(selectInfo);
    return (
        <SWRConfig
            value={{
                onError: (error) => {
                    console.log('sdfsdf');
                    if (error?.response?.status == 401) {
                        dispatch(authSlice.actions.clearInfo());
                        info && authService.logOut();
                        router.push(`/?next=${pathName}`);
                    }
                },
            }}
        >
            {children}
        </SWRConfig>
    );
};

export default memo(SWRProvider);
