'use client';
import { ProgressLoader as Progess } from 'nextjs-progressloader';
import { FC, Suspense } from 'react';

const ProgressLoader: FC<{ color: string }> = ({ color }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Progess color={color} showSpinner={false} />
        </Suspense>
    );
};

export default ProgressLoader;
