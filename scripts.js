
$(document).ready(function(){
    setInterval(function(){
    var birthday = moment('1996-10-07 04:04:00');
    var now   = moment();

    var duration = moment.duration(now.diff(birthday));
    var years = duration._data.years;
    var months = duration._data.months;
    var days = duration._data.days;
    var hours = duration._data.hours;
    var minutes = duration._data.minutes;
    var seconds = duration._data.seconds;
    $('.age').text('I\'m ' + years + ' years ' + months + ' months ' + days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds old');
    }, 1000);
});
console.log('Toto');