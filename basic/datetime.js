function convertHMS(value) {

    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}

// console.log(convertHMS(4600));

let duration = 300000;
let minutes = Math.floor(duration / 60);
let seconds = Math.floor(duration - minutes * 60);

let time = `${minutes < 10 ? `0${minutes}` : minutes} :${seconds < 10 ? `0${seconds}` : seconds}`; // result: 02:23
// console.log(time);


// Time second handler method
function secondsToHms() {
    let seconds = 300000;
    if (!seconds) return '';
   
    let duration = seconds;
    duration = duration % (3600);
   
    let min = parseInt(duration / 60);
    duration = duration % (60);
   
    let sec = parseInt(duration);
   
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    else if (min == 0) {
      return `${sec}s`
    }
    else {
      return `${min}m ${sec}s`
    }
}

console.log(secondsToHms());


// Get local date
function ToLocalDate (inDate) {
  var date = new Date();
  date.setTime(inDate.valueOf() - 60000 * inDate.getTimezoneOffset());
  return date;
}

var result = ToLocalDate(1677069788);
console.log(result);
