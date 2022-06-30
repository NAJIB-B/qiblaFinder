const dewice = document.querySelector(".device");

const getCoords = async function () {
  try {
    const res = await new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = res.coords;
    console.log(latitude, longitude);
    const p2 = 39.826206;
    const p1 = 21.422487;
    const degree = (Math.atan2(p2 - longitude, p1 - latitude) * 180) / Math.PI;
    console.log(Math.round((degree + Number.EPSILON) * 100) / 100);
  } catch (err) {
    console.error(`${err} 🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
  }
};
getCoords();

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
const checkDevice = function () {
  const device = deviceType();
  if (device === "desktop") {
    dewice.innerHTML = `you can't access this site on pc`;
    console.log(`you can't access this site on pc`);
  }

  if (device === "mobile")
    dewice.innerHTML = `you   can access this site on mobile`;
};
checkDevice();
window.addEventListener('deviceorientation', function(e) {
   dewice.innerHTML = e.webkitCompassHeading;
}, false);
