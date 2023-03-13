function dayNumber(number) {
    switch (number) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
}
}
console.log(dayNumber(0));

// iternary part
const password = 'pas$word';

password.length >= 12 ? console.log('Strong password')
 :password.length >= 8 ? console.log('Welcome!!!')
    :console.log('Password is weak!!!');
 
