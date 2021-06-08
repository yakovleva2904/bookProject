const someString = ['rent palace', 'rent flat', 'rent house', 'rent bungalow'];
const someType = ['palace', 'flat', 'house', 'bungalow'];
const someChecks = ['12:00', '13:00', '14:00'];
const someDescriptions = ['comfortable', 'modern', 'with balcony', 'beautiful view'];
const someFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const somePhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

import {getRandomArbitrary, randomInteger, randomArray, getRound, getImages} from './util.js';

export let offers = new Array(10).fill().map(u => ({
    author: {
        avatar: getImages()
      },
      offer: {
        title: getRound(someString),
        address: {
          x: getRandomArbitrary(35.65000, 35.70000),
          y: getRandomArbitrary(139.70000, 139.80000)
        },
        price: randomInteger(200, 500),
        type: getRound(someType),
        rooms: randomInteger(100, 999),
        guests: randomInteger(1, 6),
        checkin: getRound(someChecks),
        checkout: getRound(someChecks),
        features: randomArray(someFeatures, 5),
        description: getRound(someDescriptions),
        photos: randomArray(somePhotos, 3),
      },
      location: {
        x: getRandomArbitrary(35.65000, 35.70000),
        y: getRandomArbitrary(139.70000, 139.80000),
      }
    }
   
   ));