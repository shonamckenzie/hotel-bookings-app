use hotels;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "melinda windows",
        email: "melinda@gmail.com"
    },
    {
        name: "morag disk",
        email: "morag@gmail.com"
    },
    {
        name: "tony chat",
        email: "tony@gmail.com"
    }
]);