# Hotel Bookings

## Learning Objectives

- Be able to create a full-stack app
- Practice building a server with a MongoDB for persistence
- Understand the relationship between a client, server and database

## Brief

Build a system to allow a hotel to manage bookings. There should be a form to allow the hotel to add the following information for each booking:

- Guest Name
- Guest Email Address
- Checked in status

Bookings should be stored in a MongoDB via an JSON API in Express.

## MVP

- Hotel managers should be able to view a list of all bookings
- Hotel managers should be able to add a new booking, which should update the page without the page being refreshed
- Hotel managers should be able to delete bookings 

## Extensions

- Don't allow a booking to be submitted to the API unless both the name and email address are present


## Advanced Extensions

- Allow the hotel manager to update the "checked in" status of the booking


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
