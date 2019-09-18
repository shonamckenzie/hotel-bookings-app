<template lang="html">
  <div id="bookingsList">
    <div class="booking" v-for="booking in bookings">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>

    </div>

  </div>
</template>

<script>
import BookingService from '../services/BookingService';

export default {
  name: "bookings-list",
  props: ["bookings"]
}

</script>

<style lang="css" scoped>
</style>
