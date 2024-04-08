'use client';
import { authSlice, useDispatch, useSelector } from '@/store';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import React, { useEffect } from 'react';
import authService from '@/services/auth-services';
import useSWR from 'swr';
import { IData, IInfo } from '@/types';
import Loading from '@/components/ui/loading';
import { useRouter } from 'next/navigation';

interface IProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
    const dispatch = useDispatch();
    const info = useSelector(selectInfo);
    const router = useRouter();
    const { data, error } = useSWR('me', () => authService.getUser<IInfo>());

    useEffect(() => {
        if (data && !error) {
            if (!data.is_onboarded) router.push('go');
            dispatch(authSlice.actions.setInfo(data));
        }
    }, [data]);

    if (info) {
        return <>{children}</>;
    }

    return <Loading />;
};

export default AuthProvider;
