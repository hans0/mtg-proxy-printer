export const cards = [
  {
    name:'Lurrus of the Dream Den',
    type:'Legendary Creature - Cat Nightmare',
    body: [
      'Companion — Each permanent card in your starting deck has converted mana cost 2 or less. (If this card is your chosen companion, you may put it into your hand from outside the game for 3 any time you could cast a sorcery.)',
      'Lifelink',
      'During each of your turns, you may cast one permanent spell with converted mana cost 2 or less from your graveyard.'
    ],
    cmc:'{1}{W/B}{W/B}',
    pt: '3/2'
  },
  {
    name:'Lightning Bolt',
    type:'Instant',
    body: [
      'Lightning Bolt deals 3 damage to any target.'
    ],
    cmc:'{R}'
  },
  {
    name:'Esika, God of the Tree', 
    type:'Legendary Creature — God',
    body: [
      'Vigilance',
      '{T}: Add one mana of any color.',
      'Other legendary creatures you control have vigilance and \"{T}: Add one mana of any color.\"'
    ],
    cmc:'{1}{G}{G}',
    pt: '1/4',
    dfname:'Primastic Bridge',
    dfcmc:'{W}{U}{B}{R}{G}',
    dftype:'Legendary Enchantment',
    dfbody:[
      'At the beginning of your upkeep, reveal cards from the top of your library until you reveal a creature or planeswalker card. Put that card onto the battlefield and the rest on the bottom of your library in a random order.'
    ]

  }
]

