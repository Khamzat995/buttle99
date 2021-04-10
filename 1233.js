function generateSongText (num) {
  for (let i = num; i >= 1; i--) {
    if (i === 1) {
      console.log(`${i} ${end(i)} пива на стене, ${i} ${end(i)} пива!`)
      console.log(`Возьми одну, пусти по кругу, нет бутылок пива на стене!`)
    } else {
      console.log(`${i} ${end(i)} пива на стене, ${i} ${end(i)} пива!`)
      console.log(`Возьми одну, пусти по кругу, ${i - 1} ${end(i - 1)} пива на стене!`)
    }
  }

}

generateSongText(50)

function end (i) {
  if (i >= 5 && i <= 20) {
    return 'бутылок'
  }

  if (i % 10 === 2 || i % 10 === 3 || i % 10 === 4) {
    return 'бутылки'
  }

  if (i % 10 === 1) {
    return 'бутылка'
  }
  if (i === 0) {
    return 'нет бутылок'
  }

  return 'бутылок'

}

//
// let songText = {
//   text: `${i} бутылок пива на стене, ${i} бутылок пива! Возьми одну, пусти по кругу, ${i - 1} бутылок пива на стене!`,
// };