'use client';
import Script from 'next/script';
import {
    FC,
    CSSProperties,
    useEffect,
    useRef,
    useCallback,
    useState,
    Suspense,
} from 'react';
import APP_CONFIG from '@/configs';
import authService from '@/services/auth-services';
import { useRouter, useSearchParams } from 'next/navigation';
import { IInfo } from '@/types';
import { useDispatch } from '@/store';
import { authSlice } from '@/store/slices/authSlice';
import Loading from '../ui/loading';

export interface IGoogleAuth {
    clientId: string;
    client_id: string;
    credential: string;
}

export interface IGoogleLoginButton {
    text?: string;
    styles?: CSSProperties;
}

const GoogleLoginButtonitem: FC<IGoogleLoginButton> = () => {
    const { GOOGLE_CLIENTID } = APP_CONFIG;
    const router = useRouter();
    const googleSignInButton = useRef<HTMLDivElement>(null);
    const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
    const dispatch = useDispatch();
    const next = useSearchParams().get('next');

    async function handleSignIn(result: IGoogleAuth) {
        const respont = await authService.singInGoogle({
            idToken: result.credential,
            type: 'google',
        });

        if (respont) {
            const info = await authService.getUser<IInfo>();

            if (info && info?.id) {
                dispatch(authSlice.actions.setInfo(info));

                if (!info.is_onboarded) {
                    router.push('go');
                }

                if (next) {
                    router.push(next);
                    return;
                }

                if (info) router.push('/de-thi');
            }
        }
    }

    const loadScript = useCallback(() => {
        if (!googleSignInButton.current || gsiScriptLoaded) return;

        (window as any)?.google?.accounts.id.initialize({
            client_id: GOOGLE_CLIENTID,
            callback: handleSignIn,
        });

        try {
            (window as any)?.google?.accounts.id.renderButton(
                googleSignInButton.current,
                {
                    type: 'standard',
                    theme: 'outline',
                    size: 'large',
                    logo_alignment: 'center',
                    width: 373,
                    text: 'signin_with',
                } as any,
            );
        } catch (err) {
            console.log(err);
        }

        (window as any)?.google?.accounts.id.prompt();
        setGsiScriptLoaded(true);
    }, [handleSignIn, gsiScriptLoaded]);

    useEffect(() => {
        if ((window as any)?.google?.accounts?.id) {
            loadScript();
        }

        return () => {
            (window as any)?.google?.accounts.id.cancel();
        };
    }, [loadScript]);

    return (
        <>
            <div className={`w-full h-screen flex justify-center items-center`}>
                <div
                    className={`h-[310px] w-[376px] ${
                        gsiScriptLoaded ? 'visited:' : 'invisible'
                    }`}
                >
                    <h3 className="text-center font-semibold mb-7 text-2xl">
                        Sign in to Quiz
                    </h3>
                    <Script
                        src="https://accounts.google.com/gsi/client"
                        async
                        defer
                        onLoad={loadScript}
                    />
                    <div
                        className="overflow-hidden rounded"
                        id="googleSignInButton"
                        ref={googleSignInButton}
                    />
                </div>
                {!gsiScriptLoaded && <Loading />}
            </div>
        </>
    );
};

const GoogleLoginButton = () => {
    return (
        <Suspense>
            <GoogleLoginButtonitem />
        </Suspense>
    );
};

export { GoogleLoginButton };
