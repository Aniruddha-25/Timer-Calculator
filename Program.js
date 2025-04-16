/*Toggle Switch Program*/
let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");

let previous_time = null; 
let current_time = null; 
function Animatedtoggle() {
  toggle.classList.toggle("active");

  if (toggle.classList.contains("active")) {
   
    text.innerHTML = "On";
    previous_time = new Date(); 
  } else {
    
    text.innerHTML = "Off";
    if (previous_time != null) {
      current_time = new Date(); 
      calculateTimeDifference();
      previous_time = null;
    }
  }
}

/* Function to calculate and display the time difference */
function calculateTimeDifference() {
  let total_time = current_time - previous_time;

  let Hours = ms_to_hours(total_time),
    minutes = ms_to_minutes(total_time),
    seconds = ms_to_sec(total_time);

  let result = String(
    "Previous time: " +
      previous_time.toLocaleTimeString() +
      "\n" +
      "Current time: " +
      current_time.toLocaleTimeString() +
      "\n\nTotal Time Elapsed = " +
      Hours +
      " Hours: " +
      minutes +
      " Minutes: " +
      seconds +
      " Seconds"
  );

  alert(result);
}

/* Convert Milliseconds to Hours */
function ms_to_hours(total_time) {
  let hours = Math.floor(total_time / (60 * 60 * 1000));
  return hours;
}

/* Convert Milliseconds to Minutes */
function ms_to_minutes(total_time) {
  let minutes = Math.floor((total_time % (60 * 60 * 1000)) / (1000 * 60));
  return minutes;
}

/* Convert Milliseconds to Seconds */
function ms_to_sec(total_time) {
  let sec = Math.floor((total_time % (60 * 1000)) / 1000);
  return sec;
}
