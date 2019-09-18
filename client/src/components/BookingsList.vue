<template lang="html">
  <div id="bookingsList">
    <div class="booking" v-for="booking in bookings">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>

      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
    </div>

  </div>
</template>

<script>
import BookingService from '../services/BookingService';
import { eventBus } from '../main';

export default {
  name: "bookings-list",
  props: ["bookings"],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
      .then(res => eventBus.$emit('booking-deleted', id));
    }
  }
}

</script>

<style lang="css" scoped>
</style>
