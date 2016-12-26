/* callback hell example */

/*
function applyForVisa(documents, resolve, reject) {
    console.log("Processing documents...");
    setTimeout(function() {
        Math.random() > 0.5 ? resolve({}) : reject("Rejected: no documents found");
    }, 2000);
}

function bookHotel() {

}

function buyTickets() {

}

/!* callback hell *!/
applyForVisa({}, function(visa) {
    console.info("Visa is gotten!");
    bookHotel(visa, function(reservation) {
        buyTickets(reservationId, function() {

        }, function() {

        })
    },
    function(error) {

    })
},
function(reason) {
    console.warn(reason);
});
*/


function applyForVisa(documents) {
    console.log("Processing documents...");
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.2 ? resolve("VISA") : reject("Rejected: no documents found");
        }, 2000);
    });

    return promise;
}

function bookHotel(visa) {
    console.log(`Booking a hotel (visa is ${visa})...`);
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0.3 ? resolve("BOOKING") : reject("Rejected: can't book a hotel");
        }, 1000)
    });

    return promise;
}

function buyTickets(booking) {
    console.log(`Buying the tickets (booking is ${booking})...`);
}

applyForVisa({})
    .then(visa => { console.info("Visa is gotten!"); return visa; })
    .then(bookHotel)
    .then(booking => { return booking; })
    .then(buyTickets)
    .catch(error => console.warn(error));