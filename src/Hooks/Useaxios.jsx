import axios from 'axios';
import { useMemo } from 'react';

const Useaxios = () => {
    const axiosInstance = useMemo(() => {
        return axios.create({
            baseURL: 'http://localhost:5000'
            // baseURL: 'https://build-your-portfolio-server-v5vg.vercel.app'
           

        })
    }, [])
    return axiosInstance;
};

export default Useaxios;