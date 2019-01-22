function digitalClock() {
    
    var date = new Date();

    var hours = date.getHours() + '';

    var minutes = date.getMinutes() + '';

    var seconds = date.getMinutes() + '';

    var day = date.getDay();

    //console.log(day);

    // switch (day) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    // }

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

    var timeOf;

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    if (hours > 12) {
        timeFormat = hours - 12;
        timeOf = "PM";
    } else {
        timeOf = "AM";
    }

    var clock = weekDays[day] + ' ' + timeFormat + ':' + minutes + ':' + seconds + ' ' + timeOf;

    var clock = weekDays[day] + ' ' + timeFormat + ':' + minutes + ' ' + timeOf;

    document.getElementById('clock').innerHTML = clock;

    if (hours <= 19) {
        document.body.style.backgroundImage = "url('day.jpg')";
    } else {
        document.body.style.backgroundImage = "url('night.jpg')";
    }

    

}

digitalClock();

setInterval(digitalClock, 100);