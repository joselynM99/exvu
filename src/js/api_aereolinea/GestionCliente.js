import axios from "axios"

//FAchada
export const buscarVuelosDisponiblesFachada = async (body) => {
    return await buscarVuelosDisponibles(body)
}

export const buscarVueloFachada = async (numero) => {
    return await buscarVuelo(numero)
}

export const reservarFachada = async (body) => {
     await reservar(body)
}

//API
const buscarVuelosDisponibles = async (body) => {
    const data = axios.post(`http://localhost:8081/API/AmericanAereolinea/V1/cliente/vuelosDisponibles`, body).then(r => r.data)
    return data
}

const buscarVuelo = async (numero) => {
    const data = axios.get(`http://localhost:8081/API/AmericanAereolinea/V1/cliente/vuelosDisponibles/${numero}`).then(r => r.data)
    return data
}

const reservar = async (body) => {
    axios.post(`http://localhost:8081/API/AmericanAereolinea/V1/cliente/reservar`, body).then(r => r.data)
    
}