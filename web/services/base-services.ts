import axios, { AxiosInstance, AxiosResponse } from "axios";
import { COOKIE_TIME_EXPRIRES, KEY_COOKIE_AUTH_ACCESS_TOKEN, KEY_COOKIE_AUTH_REFRESH_TOKEN } from "@/constants/services-constants";
import Cookie from "js-cookie";
import queryString from 'query-string';
import qs from "qs";
import { IData, IResult } from "@/types";



export interface IQuery {
    [k: string]: string
}

class BaseSerives {
    instance: AxiosInstance;
    constructor(baseUrl: string) {
        this.instance = axios.create({
            baseURL: baseUrl
        });
        this.instance.defaults.headers.common['Authorization'] = this.getAccessToken();
        this.instance.defaults.headers.post['Content-Type'] = 'application/json';
        // this.instance.interceptors.response.use(function (response) {
        //     if (response.data.code) return Promise.resolve(response)
        //     return Promise.reject(null);
        // }, function (error) {
        //     console.log(error)
        //     return Promise.reject(null);
        // })
    }

    getAccessToken() {
        return Cookie.get(KEY_COOKIE_AUTH_ACCESS_TOKEN)
    }

    setAccessToken(token: string = '') {
        return Cookie.set(KEY_COOKIE_AUTH_ACCESS_TOKEN, token, { expires: COOKIE_TIME_EXPRIRES });
    }

    getRefreshToken() {
        return Cookie.get(KEY_COOKIE_AUTH_REFRESH_TOKEN)
    }

    setRefreshToken(token: string = '') {
        return Cookie.set(KEY_COOKIE_AUTH_REFRESH_TOKEN, token, { expires: COOKIE_TIME_EXPRIRES });
    }

    getHeaders() {
        return {
            Authorization: `Bearer ${this.getAccessToken()}`,
        };
    }

    logOut() {
        Cookie.remove(KEY_COOKIE_AUTH_ACCESS_TOKEN);
        Cookie.remove(KEY_COOKIE_AUTH_REFRESH_TOKEN);
    }

    handleResult<T>(data: AxiosResponse<IResult<T>, any>): IData<T> {
        if (data.data?.code) return data.data?.data;
        else return undefined;
    }

    parseUrl(url: string, query?: IQuery): string {
        return queryString.stringifyUrl({ url: url, query });
    }

    // async get<T>(url: string, query?: IQuery) {
    //     return this.handleResult((await this.instance.get<T>(this.parseUrl(url, query))).data);
    // }

    post<T>(url: string, data = {}) {
        return this.instance.post<T>(url, qs.stringify(data));
    }

    put<T>(url: string, data = {}) {
        return this.instance.put<T>(url, qs.stringify(data));
    }

    patch<T>(url: string, data = {}) {
        return this.instance.patch<T>(url, qs.stringify(data));
    }

    delete<T>(url: string, query?: IQuery) {
        return this.instance.delete<T>(this.parseUrl(url, query));
    }
}

export default BaseSerives

interface vlxxs {
    name: string;
}

const a = new BaseSerives('vlxx');

// async function vlxx() {
//     const b = await a.get<vlxxs>('vai calol');

// }
