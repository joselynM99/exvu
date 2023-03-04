<template>
    <div>
        <div class="datos">
            <div class="mb-3">
                <label for="" class="form-label">Número de compra:</label>
                <input class="form-control" type="text" v-model="numeroCompra">
            </div>

            <button v-on:click="buscarCompra" class="btn btn-primary">Buscar</button>
        </div>

        <div class="datos">
            <div class="mb-3">
                <label for="" class="form-label">Número de vuelo:</label>
                <input class="form-control" type="text" v-model="numeroVuelo">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Cédula cliente:</label>
                <input class="form-control" type="text" v-model="cedulaCliente">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Estado:</label>
                <input class="form-control" type="text" v-model="estado">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Asientos Comprados:</label>
                <input class="form-control" type="text" v-model="cantidadAsientosComprados">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Número de tarjeta:</label>
                <input class="form-control" type="text" v-model="numeroTarjeta">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Fecha de COmpra:</label>
                <input class="form-control" type="date" v-model="fechaCompra">
            </div>
            <button v-on:click="checkIn" class="btn btn-primary">CheckIn</button>
        </div>
    </div>
</template>
<script>
import { buscarCompraFachada, checkInFachada } from '@/js/api_aereolinea/GestionEmpleado';


export default {

    data() {
        return {
            numeroCompra: null,
            numeroVuelo: null,
            cedulaCliente: null,
            estado: null,
            cantidadAsientosComprados: null,
            numeroTarjeta: null,
            fechaCompra: null
        }
    },

    methods: {
        async buscarCompra() {

            const { numeroVuelo,
                cedulaCliente,
                estado,
                cantidadAsientosComprados,
                numeroTarjeta,
                fechaCompra } = await buscarCompraFachada(this.numeroCompra)

            this.numeroVuelo = numeroVuelo
            this.cedulaCliente = cedulaCliente
            this.cantidadAsientosComprados = cantidadAsientosComprados
            this.estado = estado
            this.numeroTarjeta = numeroTarjeta
            this.fechaCompra = fechaCompra
        },

        checkIn() {
            checkInFachada(this.numeroCompra)
        }
    },

}
</script>
<style >
.datos {
    width: 300px;
    margin: 10px auto;
}
</style>