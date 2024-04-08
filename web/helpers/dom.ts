import { debounce } from ".";

export const ListeningResize =(element: HTMLDivElement, callBack:(e:number)=> void)=>{
    const debouncedAPICall = debounce(callBack, 100);
    const handleResize:ResizeObserverCallback = (entries) => {
        for (const entry of entries) {
            const newWidth = entry.contentRect.width;
            debouncedAPICall(newWidth);
        }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(element);
}

