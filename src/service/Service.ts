import axios from 'axios';
import { create } from 'domain';

export const api = axios.create({
    baseURL: "https://bloggeneration.herokuapp.com"
})

export const login = async(url: any, dados: any, setDado: any)=>{
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}