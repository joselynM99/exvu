import axios from "axios"

//FAchada

export const buscarCompraFachada = async (numero) => {
    return await buscarCompra(numero)
}

export const checkInFachada = async (numero) => {
     await checkIn(numero)
}



//API

const buscarCompra = async (numero) => {
    const data = axios.get(`http://localhost:8081/API/AmericanAereolinea/V1/empleado/comprasPasajes/${numero}`).then(r => r.data)
    return data
}

const checkIn = async (numero) => {
     axios.put(`http://localhost:8081/API/AmericanAereolinea/V1/empleado/comprasPasajes/${numero}`).then(r => r.data)
    
}

