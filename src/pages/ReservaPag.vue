<template>
    <div class="datos">
        <div class="mb-3">
            <label for="" class="form-label">Número de vuelo:</label>
            <input class="form-control" type="text" v-model="numeroVuelo">
        </div>

        <button v-on:click="buscarVuelo" class="btn btn-primary">Buscar</button>
    </div>

    <div class="datos">
        <div class="mb-3">
            <label for="" class="form-label">Asientos disponibles: {{ asientosDisponibles }}</label>
            <label for="" class="form-label">Asientos ocupados: {{ asientosOcupados }}</label>
        </div>
    </div>

    <div class="datos">
        <div class="mb-3">
            <label for="" class="form-label">Cantidad de asientos a comprar:</label>
            <input class="form-control" type="number" v-model="cantidadAsientosComprados">
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Número de tarjeta:</label>
            <input class="form-control" type="text" v-model="numeroTarjeta">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Cédula de cliente:</label>
            <input class="form-control" type="text" v-model="cedulaCliente">
        </div>


        <button v-on:click="reservar" class="btn btn-primary">Reservar</button>
    </div>
</template>
<script>
import { buscarVueloFachada, reservarFachada } from '@/js/api_aereolinea/GestionCliente'


export default {

    data() {
        return {
            numeroVuelo: null,
            asientosDisponibles: null,
            asientosOcupados: null,
            cantidadAsientosComprados: null,
            numeroTarjeta: null,
            cedulaCliente: null,
        }
    },

    methods: {
        async buscarVuelo() {
            const { asientosDisponibles, asientosOcupados } = await buscarVueloFachada(this.numeroVuelo)
            this.asientosDisponibles = asientosDisponibles
            this.asientosOcupados = asientosOcupados
        },

        async reservar() {

            const compra = {
                numeroTarjeta: this.numeroTarjeta,
                cantidadAsientosComprados: this.cantidadAsientosComprados,
                cedulaCliente: this.cedulaCliente,
                numeroVuelo: this.numeroVuelo
            }
             reservarFachada(compra)
        }
    },

}
</script>
<style>
.datos{
    width: 300px;
    margin: 10px auto;
}
</style>