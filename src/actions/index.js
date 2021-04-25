import axios from 'axios';

export const FETCH_CARD_LOADING = "FETCH_CARD_LOADING";
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS";
export const FETCH_CARD_FAIL = "FETCH_CARD_FAIL";

export const FORMAT_DECK_LIST_SUCCESS = "FORMAT_DECK_LIST_SUCCESS";

export const GET_CARDS_FROM_DECK_LIST_LOADING = "GET_CARDS_FROM_DECK_LIST_LOADING";
export const GET_CARDS_FROM_DECK_LIST_SUCCESS = "GET_CARDS_FROM_DECK_LIST_SUCCESS";

const formatCard = (scryfallCardData) => {
  // console.log(`formatCard in actions:`, scryfallCardData);
  console.log(...scryfallCardData.card_faces ? 'dual': 'single')
  console.log(...scryfallCardData.layout === 'adventure'? 'adv': 'not an adventure')
  // ADVENTURE
  if(scryfallCardData.layout === 'adventure'){
    console.log(`we're going on an adventure`);
    const formattedAdventureData = {
      name: scryfallCardData.card_faces[0].name,
      cmc: scryfallCardData.card_faces[0].mana_cost,
      type: scryfallCardData.card_faces[0].type_line,
      body: scryfallCardData.card_faces[0].oracle_text.split('\n'),
      ...scryfallCardData.card_faces[0].power && {pt: scryfallCardData.card_faces[0].power + '/' + scryfallCardData.card_faces[0].toughness},
      ...scryfallCardData.card_faces[0].loyalty && {pt: scryfallCardData.card_faces[0].loyalty},
      advname: scryfallCardData.card_faces[1].name,
      // TODO: if CMC is the same (flip planeswalkers), don't publish
      advcmc: scryfallCardData.card_faces[1].mana_cost,
      advtype: scryfallCardData.card_faces[1].type_line,
      advbody: scryfallCardData.card_faces[1].oracle_text.split('\n'),
      // ...scryfallCardData.card_faces[1].power && {pt: scryfallCardData.card_faces[1].power + '/'+scryfallCardData.card_faces[1].toughness},
      // ...scryfallCardData.card_faces[1].loyalty && {pt: scryfallCardData.card_faces[1].loyalty}
    }
    return formattedAdventureData;
  }
  if (scryfallCardData.card_faces) {
    if (scryfallCardData.card_faces[1].type_line.includes("Land")){
      console.log("It's a land")
    }
    console.log(scryfallCardData.card_faces[1].type_line.includes("Land"))
    console.log('equal mana costs? ', scryfallCardData.card_faces[1].mana_cost !== scryfallCardData.card_faces[0].mana_cost)
    const formattedDualData = {
      name: scryfallCardData.card_faces[0].name,
      cmc: scryfallCardData.card_faces[0].mana_cost,
      type: scryfallCardData.card_faces[0].type_line,
      body: scryfallCardData.card_faces[0].oracle_text.split('\n'),
      ...scryfallCardData.card_faces[0].power && {pt: scryfallCardData.card_faces[0].power + '/'+scryfallCardData.card_faces[0].toughness},
      ...scryfallCardData.card_faces[0].loyalty && {pt: scryfallCardData.card_faces[0].loyalty},
      dfname: scryfallCardData.card_faces[1].name,
      // TODO: if CMC is the same (flip planeswalkers), don't publish
      dfcmc: scryfallCardData.card_faces[1].type_line.includes("Land") ? ' ' : scryfallCardData.card_faces[1].mana_cost,
      dfcmc: scryfallCardData.card_faces[1].mana_cost === scryfallCardData.card_faces[0].mana_cost ? scryfallCardData.card_faces[1].mana_cost : ' ',
      dftype: scryfallCardData.card_faces[1].type_line,
      dfbody: scryfallCardData.card_faces[1].oracle_text.split('\n'),
      ...scryfallCardData.card_faces[1].power && {dfpt: scryfallCardData.card_faces[1].power + '/'+scryfallCardData.card_faces[1].toughness},
      ...scryfallCardData.card_faces[1].loyalty && {dfpt: scryfallCardData.card_faces[1].loyalty}
    }
    return formattedDualData;
  }
  const formattedData = {
    name: scryfallCardData.name,
    cmc: scryfallCardData.mana_cost,
    type: scryfallCardData.type_line,
    body: scryfallCardData.oracle_text.split('\n'),
    ...scryfallCardData.power && {pt: scryfallCardData.power + '/'+scryfallCardData.toughness},
    ...scryfallCardData.loyalty && {pt: scryfallCardData.loyalty}
  }
  console.log('after format', formattedData)
  return formattedData;
}

export const getCard = (cardName) => {
  return dispatch => {
    dispatch({ type: FETCH_CARD_LOADING });
    axios
      .get(`https://api.scryfall.com/cards/named?fuzzy={${cardName}}`)
      .then(res => {
        // console.log(res);
        const formattedCardData = formatCard(res.data);
        dispatch({ type: FETCH_CARD_SUCCESS, payload: formattedCardData });
        // dispatch({ type: FETCH_CARD_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_CARD_FAIL, payload: err })

      })
  }
}

export const formatDeckList = (deckListString) => {
  console.log('formatDeckList clicked');
  let result = [];
  const deckListStringArray = deckListString.split('\n');
  deckListStringArray.map((line) => {
    if (
      line.length != 0 && 
      line.toLowerCase() !== "sideboard" &&
      line.toLowerCase() !== "deck" &&
      line.toLowerCase() !== "companion"
    ){
      result.push({
        amount: line.substr(0, line.indexOf(' ')),
        name: line.substr(line.indexOf(' ') + 1)
      })
    }
  })
  console.log('result:', result);
  return result;
}

// export const getCardsFromDeckList = (deckArray) => {
//   console.log('getCardsFromDeckList')
//   let result = [];
//   deckArray.map((card) => {
//     console.log(card[`name`]);
//     axios
//       .get(`https://api.scryfall.com/cards/named?fuzzy={${card[`name`]}}`)
//       .then((res) => {
//         console.log(res);
//         result.push(formatCard(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   });
//   return result;
// }

export const getCardsFromDeckList = (deckArray) => {
  return dispatch => {
    dispatch({ type: GET_CARDS_FROM_DECK_LIST_LOADING });
    let result = [];
    deckArray.map((card) => {
      console.log(card[`name`]);
      axios
        .get(`https://api.scryfall.com/cards/named?fuzzy={${card[`name`]}}`)
        .then((res) => {
          console.log(res);
          result.push(formatCard(res.data));
        })
        .catch((err) => {
          console.log(err);
        })
    });
    dispatch({ type: GET_CARDS_FROM_DECK_LIST_SUCCESS, payload: result });
    // return result;

  }
}