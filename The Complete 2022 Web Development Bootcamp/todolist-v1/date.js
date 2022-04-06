exports.getDate = function () {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    let day = today.toLocaleDateString("en-us", options);

    return day;
}

exports.getDay = function () {

    let today = new Date();
    let options = {
        weekday: "long",
    }
    //  You can return like this too
    return today.toLocaleDateString("en-us", options);
}