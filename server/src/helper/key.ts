export function removeKeyNull(obj: any) {
    Object.keys(obj).forEach(key => {
        if (obj[key] === null || obj[key] === '') {
            delete obj[key];
        }
    });
    return obj
}

export function removeKeyEmpTyToNull(obj: any) {
    Object.keys(obj).forEach(key => {
        if (obj[key] === null || obj[key] === '') {
            obj[key]=null;
        }
    });
    return obj
}

export function getQuery(key:string, id: string[]){
    return key && id ? {[key]:id}:{}
}