function generateSongText (num) {



  for (let i = num; i > 0; i--) {
    let songText = {
      text: `${i} бутылок пива на стене, ${i} бутылок пива! Возьми одну, пусти по кругу, ${i - 1} бутылок пива на стене!`,
    }
    console.log(songText.text)
  }
}

console.log(generateSongText(8))