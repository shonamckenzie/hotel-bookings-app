<template>
  <div id="app">
  <bookings-form />
  <bookings-list :bookings="bookings" />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsList from './components/BookingsList';
import BookingService from './services/BookingService';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-list': BookingsList,
    'bookings-form': BookingsForm
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
      completed: false
    })
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>

</style>
