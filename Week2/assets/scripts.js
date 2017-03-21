/* Feature 1 - JavaScript geolocation
------------------------------------------------- */
const form = document.querySelector('.locationForm');
const headers = document.querySelectorAll('.location');

const supports_geolocation = () => {
  return 'geolocation' in navigator;
}

const showPosition = (position) => {
  headers[0].innerHTML = `Latitude: ${position.coords.latitude}`;
  headers[1].innerHTML = `Longitude: ${position.coords.longitude}`;
}

const handleError = (error) => {
    form.classList.remove('hidden');
}

if(supports_geolocation()) {
   navigator.geolocation.getCurrentPosition(showPosition, handleError);
} else {
  form.classList.remove('hidden');
}
