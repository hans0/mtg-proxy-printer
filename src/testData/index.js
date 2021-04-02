export const cards = [
  {
    name:'Lurrus of the Dream Den',
    cmc:'{1}{W/B}{W/B}',
    type:'Legendary Creature - Cat Nightmare',
    body: [
      'Companion — Each permanent card in your starting deck has converted mana cost 2 or less. (If this card is your chosen companion, you may put it into your hand from outside the game for 3 any time you could cast a sorcery.)',
      'Lifelink',
      'During each of your turns, you may cast one permanent spell with converted mana cost 2 or less from your graveyard.'
    ],
    pt: '3/2'
  },
  {
    name:'Lightning Bolt',
    cmc:'{R}',
    type:'Instant',
    body: [
      'Lightning Bolt deals 3 damage to any target.'
    ],
  },
  {
    name:'Esika, God of the Tree', 
    cmc:'{1}{G}{G}',
    type:'Legendary Creature — God',
    body: [
      'Vigilance',
      '{T}: Add one mana of any color.',
      'Other legendary creatures you control have vigilance and "{T}: Add one mana of any color."'
    ],
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
    cmc:'{U}',
    type:'Creature — Human Wizard',
    body: [
      'At the beginning of your upkeep, look at the top card of your library. You may reveal that card. If an instant or sorcery card is revealed this way, transform Delver of Secrets.'    
    ],
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
      '{4}{B}: Put target creature card from a graveyard onto the battlefield under your control.',
    ]
  },
  {
    name: 'Rowan, Scholar of Sparks',
    cmc: '{2}{R}',
    type: 'Legendary Planeswalker — Rowan',
    body: [
      'Instant and sorcery spells you cast cost {1} less to cast.',
      '+1: Rowan, Scholar of Sparks deals 1 damage to each opponent. If you\'ve drawn three or more cards this turn, she deals 3 damage to each opponent instead.',
      '−4: You get an emblem with "Whenever you cast an instant or sorcery spell, you may pay {2}. If you do, copy that spell. You may choose new targets for the copy."'
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
  },
  {
    name: 'Nicol Bolas, the Ravager',
    cmc: '{1}{U}{B}{R}',
    type: 'Legendary Creature — Elder Dragon',
    body: [
      `Flying`,
      `When Nicol Bolas, the Ravager enters the battlefield, each opponent discards a card.`,
      `{4}{U}{B}{R}: Exile Nicol Bolas, the Ravager, then return him to the battlefield transformed under his owner's control. Activate this ability only any time you could cast a sorcery.`
    ],
    pt: '4/4',
    dfname: 'Nicol Bolas, the Arisen',
    dftype: 'Legendary Planeswalker — Bolas',
    dfcmc: '(same)',
    dfbody: [
      `+2: Draw two cards.`,
      `−3: Nicol Bolas, the Arisen deals 10 damage to target creature or planeswalker.`,
      `−4: Put target creature or planeswalker card from a graveyard onto the battlefield under your control.`,
      `−12: Exile all but the bottom card of target player's library.`
    ], 
    dfpt: '7'
  },
  {
    name: 'Garruk Relentless',
    cmc: '{3}{G}',
    type: 'Legendary Planeswalker — Garruk',
    body: [
      `When Garruk Relentless has two or fewer loyalty counters on him, transform him.`,
      `0: Garruk Relentless deals 3 damage to target creature. That creature deals damage equal to its power to him.`,
      `0: Create a 2/2 green Wolf creature token.`
    ], 
    pt: '3', 
    dfname: 'Garruk, the Veil-Cursed',
    dftype: 'Legendary Planeswalker — Garruk',
    dfcmc: '(same)',
    dfbody: [
      `[[[ something about being B/G ]]]`,
      `+1: Create a 1/1 black Wolf creature token with deathtouch.`,
      `−1: Sacrifice a creature. If you do, search your library for a creature card, reveal it, put it into your hand, then shuffle your library.`,
      `−3: Creatures you control gain trample and get +X/+X until end of turn, where X is the number of creature cards in your graveyard.`
    ], 
    dfpt: '7'
  },
  {
    name: `Jace, Vryn's Prodigy`,
    cmc: '{1}{U}',
    type: 'Legendary Creature — Human Wizard',
    body: [
      `{T}: Draw a card, then discard a card. If there are five or more cards in your graveyard, exile Jace, Vryn's Prodigy, then return him to the battlefield transformed under his owner's control.`
    ],
    pt: '0/2',
    dfname: 'Jace, Telepath Unbound', 
    dfcmc: '', 
    dftype: 'Legendary Planeswalker — Jace', 
    dfbody: [
      `+1: Up to one target creature gets -2/-0 until your next turn.`,
      `−3: You may cast target instant or sorcery card from your graveyard this turn. If that spell would be put into your graveyard this turn, exile it instead.`,
      `−9: You get an emblem with "Whenever you cast a spell, target opponent mills five cards."`
    ], 
    dfpt: '5'
  }
]

