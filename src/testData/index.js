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
  },
  {
    name:'Delver of Secrets', 
    type:'Creature — Human Wizard',
    body: [
      'At the beginning of your upkeep, look at the top card of your library. You may reveal that card. If an instant or sorcery card is revealed this way, transform Delver of Secrets.'    
    ],
    cmc:'{U}',
    pt: '1/1',
    dfname:'Insectile Aberration',
    // dfcmc:'{U}',
    dftype:'Creature - Human Insect',
    dfbody:[
      'Flying'  
    ],
    dfpt: '3/2'
  },
  {
    name: "Nezumi Graverobber",
    cmc: "{1}{B}",
    type: "Creature — Rat Rogue",
    body: [
      "{1}{B}: Exile target card from an opponent's graveyard. If no cards are in that graveyard, flip Nezumi Graverobber.",
    ],
    pt: '2/1',
    dfname: 'Nighteyes the Desecrator',
    dftype: 'Legendary Creature — Rat Wizard',
    dfpt: '4/2',
    dfbody: [
      '{4}{B}: Put target creature card from a graveyard onto the battlefield under your control.'
    ]
  },
  {
    name: 'Rowan, Scholar of Sparks',
    cmc: '{2}{R}',
    type: 'Legendary Planeswalker — Rowan',
    body: [
      'Instant and sorcery spells you cast cost {1} less to cast.',
      '+1: Rowan, Scholar of Sparks deals 1 damage to each opponent. If you\'ve drawn three or more cards this turn, she deals 3 damage to each opponent instead.',
      '−4: You get an emblem with \"Whenever you cast an instant or sorcery spell, you may pay {2}. If you do, copy that spell. You may choose new targets for the copy.'
    ],
    pt: '2',
    dfname: 'Will, Scholar of Frost',
    dftype: 'Legendary Planeswalker — Will',
    dfcmc: '{4}{U}',
    dfbody: [
      'Instant and sorcery spells you cast cost {1} less to cast.',
      '+1: Up to one target creature has base power and toughness 0/2 until your next turn.',
      '−3: Draw two cards.',
      '−7: Exile up to five target permanents. For each permanent exiled this way, its controller creates a 4/4 blue and red Elemental Creature token.'
    ],
    dfpt: '4'
  }
]

