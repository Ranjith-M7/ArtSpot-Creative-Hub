const countDown = () => {
  const countDate = new Date("Feb 14,2024 15:30:02").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // Time Definition
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = `${textDay}`;
  document.querySelector(".hour").innerText = `${textHour}`;
  document.querySelector(".minute").innerText = `${textMinute}`;
  document.querySelector(".second").innerText = `${textSecond}`;

  if (gap < 1000) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = `<p>Offer Expired</p>`;
  }
};
const interval = setInterval(countDown, 1000);
