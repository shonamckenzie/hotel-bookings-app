use hotels;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "melinda windows",
        email: "melinda@gmail.com",
        checkedIn: true
    },
    {
        name: "morag disk",
        email: "morag@gmail.com",
        checkedIn: false
    },
    {
        name: "tony chat",
        email: "tony@gmail.com",
        checkedIn: false
    }
]);