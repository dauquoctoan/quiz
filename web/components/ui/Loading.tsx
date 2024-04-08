import React from 'react';
import { ImSpinner10 } from 'react-icons/im';

const Loading = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center relative ">
            <ImSpinner10 className="animate-spin text-3xl" />
        </div>
    );
};

export default Loading;
