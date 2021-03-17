let count = 0;
$(".submit").click(function() {
    let number = Number($(".number").val());
    let hobby = $(".hobby").val().toLowerCase();
    $(".results").show();
    if (['soccer', 'cycling', 'skateboarding', 'ultimate frisbee'].indexOf(hobby) < 0) {
        $(".results").append("<p> Oh no! You must have typed something wrong. Try again. </p>");
        $(".results").append("<img src='https://media1.giphy.com/media/M28rUlcjueKUE/giphy.gif?cid=ecf05e47hter5lytx0zlef2xoe2ssnq5jhb8gn7saq0uimqu&rid=giphy.gif'>");
    } else if (hobby === "skateboarding" || (0 <= number && number < 25)) {
        $(".results").append("<p> Since your favorite number is " + number + " and you like " + hobby + ", you are Corbin!</p>");
        $(".results").append("<img src='https://media-exp1.licdn.com/dms/image/C5603AQED-vqqAMQFww/profile-displayphoto-shrink_400_400/0/1529185595919?e=1621468800&v=beta&t=GXSayjskkrLKxp8vxY88LjtlVPBIb5MbzO3mZwYU3dM'>");
    } else if (hobby === "cycling" || (25 <= number && number <= 50)) {
        $(".results").append("<p> Since your favorite number is " + number + " and you like " + hobby + ", you are Robert!</p>");
        $(".results").append("<img src='https://media-exp1.licdn.com/dms/image/C5603AQHbGSYzr0bAEQ/profile-displayphoto-shrink_400_400/0/1576272477496?e=1621468800&v=beta&t=pN42t1_1GIbJFHMlsLQFjqLjjx73r-MtLz_X7TA1qvU'>");
    } else if (hobby === "ultimate frisbee" || (50 < number && number <= 75)) {
        $(".results").append("<p> Since your favorite number is " + number + " and you like " + hobby + ", you are Megan!</p>");
        $(".results").append("<img src='https://media-exp1.licdn.com/dms/image/C4E03AQHHIf5qjZaXSQ/profile-displayphoto-shrink_400_400/0/1568176333848?e=1621468800&v=beta&t=fPbnyCy6E7u9BdnsSZmdPYWZpjXcKaMAYhVXr9JatMU'>");
    } else if (hobby === "soccer" || (75 < number && number <= 100)) {
        $(".results").append("<p> Since your favorite number is " + number + " and you like " + hobby + ", you are Cassie!</p>");
        $(".results").append("<img src='https://media-exp1.licdn.com/dms/image/C4E03AQHNXqCl-pkN7Q/profile-displayphoto-shrink_400_400/0/1611716537113?e=1621468800&v=beta&t=M_URxr3-4sLCIMy6fV4Q3Xi_5c3MqrW6CJhgla00ynE'>");
    } else {
        $(".results").append("<p> Oh no! You must have typed something wrong. Try again. </p>");
        $(".results").append("<img src='https://media1.giphy.com/media/M28rUlcjueKUE/giphy.gif?cid=ecf05e47hter5lytx0zlef2xoe2ssnq5jhb8gn7saq0uimqu&rid=giphy.gif'>");
    }
    count = count + 1;
    $(".counter").text("This quiz has been taken " + count + " time(s)");
});