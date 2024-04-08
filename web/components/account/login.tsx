'use client';
import React, { useState, useLayoutEffect, Suspense } from 'react';
import { GoogleLoginButton } from './google-login';
import authService from '@/services/auth-services';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import { IInfo } from '@/types';
import { selectInfo } from '@/store/slices/authSlice/selectors';
import Loading from '../ui/loading';

const LoginForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const info = useSelector(selectInfo);
    const next = useSearchParams().get('next');

    async function getData() {
        try {
            const data = await authService.getUser<IInfo>();
            if (data) dispatch(authSlice.actions.setInfo(data));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useLayoutEffect(() => {
        getData();
    }, []);

    if (info) router.push(next || 'de-thi');

    if (loading) return <Loading />;

    if (!loading && !info) return <GoogleLoginButton />;

    return <></>;
};

const Login = () => {
    return (
        <Suspense>
            <LoginForm></LoginForm>
        </Suspense>
    );
};

export default React.memo(Login);
