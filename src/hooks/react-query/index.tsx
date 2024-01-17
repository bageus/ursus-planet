'use client'

import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { type MutationKey } from "@tanstack/react-query";


const SERVER_URL = 'http://localhost:8000'


export const apiInstance = axios.create({
    baseURL: SERVER_URL + '/api/',
    timeout: 1000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})


export function useBaseQuery<T>(keys: (string | number | null)[], url: string) {
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            const { data } = await apiInstance.get(url)
            return data as T
        }
    })
}


export function useBaseMutation<MutationData, MutationResponse>(
    key: MutationKey | undefined,
    url: string,
    method?: 'post' | 'put' | 'patch'
) {
    return useMutation({
        mutationKey: key,
        mutationFn: async (mutationData: MutationData) => {
            const { data } = await apiInstance[method || 'post'](url, mutationData)
            return data as MutationResponse
        }
    })
}