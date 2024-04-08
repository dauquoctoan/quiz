import { COOKIE_TIME_EXPRIRES, KEY_COOKIE_AUTH_ACCESS_TOKEN, KEY_COOKIE_AUTH_REFRESH_TOKEN } from "@/constants/services-constants";
import { IData, IResult } from "@/types";
import axios from "axios";
import Cookie from "js-cookie";
import qs from "qs";
import queryString from "query-string";
import { IQuery } from "./base-services";

export class BaseService {
    protected headers: any = {};
    constructor(readonly baseURL: string) { }
    getAccessToken() {
        return Cookie.get(KEY_COOKIE_AUTH_ACCESS_TOKEN)
    }

    parseUrl(url: string, query?: IQuery): string {
        return queryString.stringifyUrl({ url: url, query });
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

    handleResult<T>(result: IResult<T>) {
        if (result.code) return result.data;
        else return undefined;
    }

    get<T>(url: string, query = {}, config = {}): Promise<IData<T>> {
        return axios<IResult<T>>({
            method: "get",
            url: this.parseUrl(this.baseURL + url, query),
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        }).then((res) => res.data).then(this.handleResult);
    }

    post<T>(url: string, data = {}, config = {}): Promise<IData<T>> {
        return axios<IResult<T>>({
            method: "post",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            data: data,
            ...config,
        }).then((res) => res.data).then(this.handleResult);
    }

    patch<T>(url: string, data = {}, config = {}) {
        return axios<IResult<T>>({
            method: "patch",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            data: data,
            ...config,
        }).then((res) => res.data).then(this.handleResult);
    }

    put<T>(url: string, data = {}, config = {}): Promise<IData<T>> {
        return axios<IResult<T>>({
            method: "put",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            data: qs.stringify(data),
            ...config,
        }).then((res) => res.data).then(this.handleResult);
    }

    delete(url: string, config = {}) {
        return axios({
            method: "delete",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        }).then((res) => res.data).then(this.handleResult);
    }
}