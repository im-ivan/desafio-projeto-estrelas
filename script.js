const cards = document.getElementsByClassName('card');
const cardsImages = document.getElementsByClassName('card-image');
const charactersNames = document.getElementsByClassName('character-name');
const totalCharacters = 671;

generateRandomNumber = () => {
  return Math.floor(Math.random() * totalCharacters);
}
getCharacters = async () => {
  let id = [];
  for (i = 0; i < cards.length; i++) {
    id[i] = generateRandomNumber();
  }
  return (await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    }
  })).json();
}
fillCards = async () => {
  let characters = await getCharacters();
  for (let i = 0; i < cards.length; i++) {
    cardsImages[i].src = characters[i].image;
    cardsImages[i].alt = characters[i].name;
    charactersNames[i].innerHTML = characters[i].name;
  }
}
fillCards()