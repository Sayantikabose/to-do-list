//jshint ejsversion:6
exports = getDate;

function getDate() {
    let today = new Date();

    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    var day = today.toLocaleDateString("en-US", options);
    return day;
}