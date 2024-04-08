export const debounce = (func:Function, delay:number) => {
    let timeoutId:NodeJS.Timeout;
    // @ts-ignore: Unreachable code error
    const context = this;
    return function(...args:any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
};