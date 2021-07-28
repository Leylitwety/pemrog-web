import useSWR from "swr";

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}

export const useCovid = () => {
    //url
    const url = "http://localhost:3000/api/covid";
    //data dan error
    const {data, error} = useSWR(url, fetcher);
    return {data, error}
}

export const useUser = () => {
    //url
    const url = "http://localhost:3000/api/user";
    //data dan error
    const {data, error} = useSWR(url, fetcher);
    return {data, error}
}