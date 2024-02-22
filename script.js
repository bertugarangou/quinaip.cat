window.onload = function() {
  fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
          document.getElementById('ip-address').textContent = data.ip;
      }).catch(error => {
          console.error('Eps! ', error);
          document.getElementById('ip-address').textContent = 'Sembla que hi ha hagut un error. No puc obtenir la teva IP.';
      });
};
