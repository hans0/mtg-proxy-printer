import axios from 'axios';

export const FETCH_CARD_LOADING = "FETCH_CARD_LOADING";
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS";
export const FETCH_CARD_FAIL = "FETCH_CARD_FAIL"


const formatCard = (scryfallCardData) => {
  // console.log(`formatCard in actions:`, scryfallCardData);
  if (scryfallCardData.card_faces) {
    const formattedDualData = {
      name: scryfallCardData.card_faces[0].name,
      cmc: scryfallCardData.card_faces[0].mana_cost,
      type: scryfallCardData.card_faces[0].type_line,
      body: scryfallCardData.card_faces[0].oracle_text.split('\n'),
      ... scryfallCardData.card_faces[0].power && {pt: scryfallCardData.card_faces[0].power + '/'+scryfallCardData.card_faces[0].toughness},
      ... scryfallCardData.card_faces[0].loyalty && {pt: scryfallCardData.card_faces[0].loyalty},
      dfname: scryfallCardData.card_faces[1].name,
      dfcmc: scryfallCardData.card_faces[1].mana_cost,
      dftype: scryfallCardData.card_faces[1].type_line,
      dfbody: scryfallCardData.card_faces[1].oracle_text.split('\n'),
      ... scryfallCardData.card_faces[1].power && {pt: scryfallCardData.card_faces[1].power + '/'+scryfallCardData.card_faces[1].toughness},
      ... scryfallCardData.card_faces[1].loyalty && {pt: scryfallCardData.card_faces[1].loyalty}

    
    }
    return formattedDualData;
  }
  const formattedData = {
    name: scryfallCardData.name,
    cmc: scryfallCardData.mana_cost,
    type: scryfallCardData.type_line,
    body: scryfallCardData.oracle_text.split('\n'),
    ... scryfallCardData.power && {pt: scryfallCardData.power + '/'+scryfallCardData.toughness},
    ... scryfallCardData.loyalty && {pt: scryfallCardData.loyalty}
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
        const formattedCardData = formatCard(res.data)
        dispatch({ type: FETCH_CARD_SUCCESS, payload: formattedCardData });
        // dispatch({ type: FETCH_CARD_SUCCESS, payload: res.data })
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_CARD_FAIL, payload: err })

      })
  }
}