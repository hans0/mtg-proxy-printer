import axios from 'axios';

const getCard = (cardName) => {
  var card = {
    id: '', 
    name: '',
    cmc: '',
    type: '',
    body: [],
    pt: '',
  }
  axios.get(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
    .then((res) => {
      console.log(res.data);
      card.id = res.data.multiverse_ids[0];
      card.name = res.data.name;
      card.cmc = res.data.mana_cost;
      card.type = res.data.type_line
      card.pt = res.data.power ? `${res.data.power}/${res.data.toughness}` : '';
      card.body = res.data.oracle_text.split('\n');
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(card)
  return card;
  
}

export default getCard;