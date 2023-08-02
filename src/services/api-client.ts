import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8188ec4468fd49e18325770d1a23f642'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient;