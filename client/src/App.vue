<template>
  <div id="app">
  <bookings-list :bookings="bookings" />
  </div>
</template>

<script>
import BookingsList from './components/BookingsList';
import BookingService from './services/BookingService';


export default {
  name: 'app',
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-list': BookingsList
  },
  mounted(){
    this.fetchData();
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
