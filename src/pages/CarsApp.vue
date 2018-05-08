<template>
  <div>
    <table class="table mt-4 ml-1">
      <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Brand</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>
          <th scope="col">Max Speed</th>
          <th scope="col">Is automatic</th>
          <th scope="col">Engine</th>
          <th scope="col">Number of doors</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.id }}</td>
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.maxSpeed }}</td>
          <td>{{ car.isAutomatic }}</td>
          <td>{{ car.engine }}</td>
          <td>{{ car.numberOfDoors }}</td>
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
      newCar: {
        brand: '',
        model: '',
        year: '',
        maxSpeed: '',
        isAutomatic: '',
        engine: '',
        numberOfDoors: ''
      }
    }
  },
  created() {
    carsService.getAll().then(response => {
      this.cars = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

