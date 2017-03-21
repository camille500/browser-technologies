/* Feature 1 - JavaScript geolocation
------------------------------------------------- */
const supports_geolocation = () => {
  return 'geolocation' in navigator;
}

const showPosition = (position) => {
  const el = document.querySelectorAll('.location');
  el[0].innerHTML = `Latitude: ${position.coords.latitude}`;
  el[1].innerHTML = `Longitude: ${position.coords.longitude}`;
}

if(supports_geolocation()) {
   navigator.geolocation.getCurrentPosition(showPosition);
} else {
  const el = document.querySelector('.locationForm');
  el.classList.remove('hidden');
}
