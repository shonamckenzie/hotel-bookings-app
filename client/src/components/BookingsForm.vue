<template lang="html">
  <form v-on:submit="addBooking" id="bookings-form"  method="post">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label />
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" />
    </div>
    <div class="formWrap">
      <span>Checked In: </span>
      <select v-model="checkedIn" >
        <option disabled value=""></option>
        <option >yes</option>
        <option >no</option>
      </select>
      <!-- <label for="checkedIn">Checked In:</label>
      <input type="text" id="checkedIn" v-model="checkedIn" /> -->
    </div>
      <input type="submit" id="save" value="Save" />
  </form>
</template>


<script>
import BookingService from '../services/BookingService'
import { eventBus } from '../main'

export default {
  name: "bookings-form",
  data(){
    return {
      name: '',
      email: '',
      checkedIn: ''
    }
  },
  methods: {
    addBooking(event){
      event.preventDefault()
      const newBooking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      BookingService.postBooking(newBooking)
      .then(res => eventBus.$emit('booking-added', res))
      this.name = ''
      this.email = ''
      this.checkedIn = ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
