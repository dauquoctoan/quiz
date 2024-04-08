import { LS_PROJECT_KEY } from "@/apiKey";
import APP_CONFIG from "@/configs";
import { BaseService } from "@/services/base-service";
import projectService from "@/services/project-services";
import { useSelector } from "@/store";
import { selectInfo } from "@/store/slices/authSlice/selectors";
import { IData, IParams, IProject } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import useSWR from "swr";

type apifetch = <T>(a: string | undefined) => Promise<T | undefined>;

const { API_BASE_URL } = APP_CONFIG;

export const useFetch = <T>(apifetch: apifetch, url?: string) => {
    const [data, setData] = useState<IData<T>>(undefined);

    const api = apifetch.bind(new BaseService(API_BASE_URL));

    const getData = async () => {
        const data: IData<T> = await api<T>(url);
        setData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return {
        data: data,
    }
}


export const useCurentProject = ()=>{
    const info = useSelector(selectInfo)
    const params = useParams<IParams>()
    const { data: projects } = useSWR<IData<IProject[]>>(
        LS_PROJECT_KEY(info?.last_workspace_id),
        () => {
            return projectService.getProjects<IData<IProject[]>>(
                info?.last_workspace_id || '',
            );
        },
    );

    return projects?.find((e) => (e.id = params.projectid))
}