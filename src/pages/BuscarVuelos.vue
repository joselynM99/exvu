<template>
    <div id="datos">
        <div class="mb-3">
            <label for="" class="form-label">Fecha de vuelo:</label>
            <input class="form-control" type="date" v-model="fechaVuelo">
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Lugar de origen:</label>
            <input class="form-control" type="text" v-model="origen">
        </div>

        <div class="mb-3">
            <label for="" class="form-label">Lugar de destino:</label>
            <input class="form-control" type="text" v-model="destino">
        </div>
        <button v-on:click="buscarVuelos" class="btn btn-primary">Buscar</button>
    </div>
    <table class="table table-success table-striped">
        <thead>
            <tr>
                <th>Número</th>
                <th>Origen</th>
                <th>Destino</th>
                <th>Categoría</th>
                <th>Nombre del avión</th>
                <th>Valor del asiento</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="v in vueloArray" :key="v.numero">
                <td>{{ v.numero }}</td>
                <td>{{ v.origen }}</td>
                <td>{{ v.destino }}</td>
                <td>{{ v.categoria }}</td>
                <td>{{ v.nombreAvion }}</td>
                <td>{{ v.valorAsiento }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { buscarVuelosDisponiblesFachada } from '@/js/api_aereolinea/GestionCliente'

export default {
    data() {
        return {
            fechaVuelo: null,
            origen: null,
            destino: null,
            vueloArray:null
        }
    },

    methods: {
        async buscarVuelos() {

            const vuelo = {

                origen: this.origen,
                destino: this.destino,
                fechaVuelo: this.fechaVuelo,
            }
            const data = await buscarVuelosDisponiblesFachada(vuelo)
            this.vueloArray = Object.values(data)

        },


    },

}
</script>
<style>
#datos{
    width: 300px;
    margin: 10px auto;
}
</style>