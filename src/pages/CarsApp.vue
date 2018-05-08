<template>
  <div>
    <table class="table mt-4 ml-1">
      <thead class="thead-light">
        <tr>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>
          <th scope="col">Max Speed</th>
          <th scope="col">Is automatic</th>
          <th scope="col">Engine</th>
          <th scope="col">Number of doors</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(car) in cars" :key="car.id">
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.maxSpeed }}</td>
          <td>{{ car.isAutomatic }}</td>
          <td>{{ car.engine }}</td>
          <td>{{ car.numberOfDoors }}</td>
          <td>
            <router-link :to="'/edit/'+car.id" class="text-center align-middle btn btn-warning">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click="delete(car.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { carsService } from '../utils/CarsService.js'

export default {
  data() {
    return {
      cars: [],
    }
  },
  created() {
    carsService.getAll().then(response => {
      this.cars = response.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    delete(id) {
      carsService.delete(id).then(response => {
        // this.cars.splice(this.cars.indexOf(id), 1)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

