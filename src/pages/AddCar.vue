<template>
  <div>
    <h1>Add car</h1>
    <form @submit.prevent="addCar(newCar)">
      <div class="form-group col-4">
        <label for="brand">Brand</label>
        <input type="text" v-model="newCar.brand" class="form-control" id="brand">
      </div>
      <div class="form-group col-4">
        <label for="model">Model</label>
        <input type="text" v-model="newCar.model" class="form-control" id="model">
      </div>
      <div class="ml-3">
        <label for="year" class="mr-2">Year</label>
        <select v-model="year">
          <option v-for="(year, key) in years" :key="key" :value="year.value">
            {{ year.value }}
          </option>
        </select>
      </div>
      <div class="form-group col-4">
        <label for="maxSpeed">Max Speed</label>
        <input type="number" v-model="newCar.maxSpeed" class="form-control" id="maxSpeed">
      </div>
      <div class="form-group col-4">
        <label for="numberOfDoors">Number of doors</label>
        <input type="number" v-model="newCar.numberOfDoors" class="form-control" id="numberOfDoors">
      </div>
      <div class="form-group col-4">
        <label for="engine">Engine</label><br>
        <input type="radio" class="ml-2 mr-1" value="petrol" v-model="newCar.engine">
        <label for="one">Petrol</label>
        <br>
        <input type="radio" class="ml-2 mr-1" value="diesel" v-model="newCar.engine">
        <label for="two">Diesel</label>
        <br>
        <input type="radio" class="ml-2 mr-1" value="electric" v-model="newCar.engine">
        <label for="two">Electric</label>
        <br>
        <input type="radio" class="ml-2 mr-1" value="hybrid" v-model="newCar.engine">
        <label for="two">Hybrid</label>
        <br>
      </div>
      <div class="form-group col-4">
        <label for="isAutomatic" class="mr-2">Is automatic</label>
        <input type="checkbox" v-model="newCar.isAutomatic">
      </div>
      <div class="form-group col-4">
        <button type="submit" class="btn btn-primary mr-2">Add car</button>
        <button @click="resetForm($event)" class="btn btn-secondary">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import { carsService } from '../utils/CarsService.js'

export default {
  data() {
    return {
      year: 1990,
      newCar: {
          brand: '',
          model: '',
          year: '',
          maxSpeed: '',
          isAutomatic: '',
          engine: 'petrol',
          numberOfDoors: ''
      },
      years: carsService.getYears()
    }
  },
  methods: {
    addCar(car) {
      carsService.addCar(car).then(response => {
        this.$router.push('/cars')
      }).catch(error => {
        console.log(error)
      })
    },
    resetForm(event) {
      this.newCar = {}
      this.newCar.engine = 'petrol'
      this.year = 1990
      event.preventDefault()
    }
  }
}
</script>
