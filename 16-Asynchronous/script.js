'use strict';

const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const getJSON = async function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errorMsg} ${res.status}`);
    }
    return res.json();
  });
};

///////////////////////////////////////
// https://restcountries.com/v2/
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('poland');
getCountryData('USA');
getCountryData('germany');


const getCountryAndNeighbor = function (country) {
  // AJAX cal country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // redner countr 1
    renderCountry(data);

    // get neighbour country (2)

    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX call 2

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbor('Ek');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v2/name/poland`);
// console.log(request);

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong 💣💣💣 ${err.message}. Try Again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
///////////////////////// Challenege 1 //////////////////////////
/* Get latitude and longitude from two inputs and redner a country based on those coords */

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error(`No Neighbour found!`);
//       // country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong 💣💣💣 ${err.message}. Try Again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// document.querySelector('.form').addEventListener('submit', e => {
//   e.preventDefault();
// });

// btn.addEventListener('click', function () {
//   const Latitude = document.querySelector('.latitude').value;
//   const Longitude = document.querySelector('.longitude').value;
//   console.log(Latitude, Longitude);
//   whereAmI(Latitude, Longitude);
// });

// const whereAmI = function (lat, lng) {
//   getJSON(
//     `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`,
//     `Data not found`
//   )
//     .then(data => getCountryData(data.address.country))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     });
// };

// console.log('test staqr');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });
// console.log('hier');

////////////////////////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('You lose your money 👀'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = seconds =>
//   new Promise(resolve => setTimeout(resolve, seconds * 1000));

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   });

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('er')).catch(res => console.error(res));

///////////////////////////////////////////////////////////////////////

// const getPosition = function () {
//   console.log('Getting position');
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   error => reject(error)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return getJSON(
//         `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`,
//         `Data not found`
//       );
//     })
//     .then(data => {
//       console.log(`You are in ${data.address.city}, ${data.address.country} `);
//       return getJSON(
//         `https://restcountries.com/v2/name/${data.address.country}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', whereAmI);

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error(`No Neighbour found!`);
//       // country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong 💣💣💣 ${err.message}. Try Again! `);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getPosition = function () {
  console.log('Getting position');
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return getJSON(
//         `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`,
//         `Data not found`
//       );
//     })
//     .then(data => {
//       console.log(`You are in ${data.address.city}, ${data.address.country} `);
//       return getJSON(
//         `https://restcountries.com/v2/name/${data.address.country}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // Reverse geocoding
//     const resGeo = await fetch(
//       `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=en`
//     );
//     if (!resGeo.ok) throw new Error(`Problem getting location data`);
//     const dataGeo = await resGeo.json();
//     // Country Data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.address.country}`
//     );
//     if (!res.ok) throw new Error(`Problem getting country data`);

//     const data = await res.json();
//     renderCountry(data[0]);
//     countriesContainer.style.opacity = 1;
//   } catch (err) {
//     console.error(err.message);
//     renderError(`Something went wrong ${err.message}`);

//     // reject promise returned from async
//     throw err;
//   }
// };
// (async function () {
//   try {
//     const location = await whereAmI();
//     console.log(location);
//   } catch (error) {
//     console.error(error.message);
//     renderError(`Something went wrong ${error.message}`);

//     // reject promise returned from async
//     throw error;
//   } finally {
//     console.log('code');
//   }
// })();

const countryURL = `https://restcountries.com/v2/name/`;
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`${countryURL}${c1}`),
      getJSON(`${countryURL}${c2}`),
      getJSON(`${countryURL}${c3}`),
    ]);

    console.log(data.map(data => data[0].capital));
  } catch (error) {
    console.error(error);
  }
};
get3Countries('portugal', 'canada', 'poland');

// (async function () {
//   const data = await Promise.race([
//     getJSON(`${countryURL}italy`),
//     getJSON(`${countryURL}poland`),
//     getJSON(`${countryURL}canada`),
//   ]);
//   console.log(data[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// // Promise.race
// Promise.race([getJSON(`${countryURL}egypt`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('another Success'),
// ]).then(res => console.log(res));

// // Promise.any [ES2021]

// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('another Success'),
// ]).then(res => console.log(res));
