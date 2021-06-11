export function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


export function randomInteger(min, max) {
  const someNumerals = min + Math.random() * (max - min + 1);
  return Math.round(someNumerals);
}

export function randomArray(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = items[i]
    items[i] = items[j]
    items[j] = k
  }
  const randomItemLength = randomInteger([0], [items.length - 1]);
  const sliceArray = items.slice(randomItemLength);
  return sliceArray;
}

export function getRound(someArray) {
  const someNumber = getRandomArbitrary([0], [someArray.length - 1]);
  const someRound = Math.round(someNumber);
  const randomString = someArray[someRound];
  return randomString;
}

export function getImages() {
  const numerImg = getRandomArbitrary(1, 8);
  const numerImgRound = Math.round(numerImg);
  return 'img/avatars/user' + '0' + numerImgRound + '.png'
}
