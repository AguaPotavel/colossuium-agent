const example = [
  {
    user: "{{user1}}",
    content: {
      text:
        `{
              you: {
                stats: {
                    health: 100,
                    stamina: 100,
                    strength: 100,
                    agility: 100,
                    speed: 100,
                    sneaking:100,
                    integrity: 100
                },
                "name": "Maximus"
                "status_effects": [],
             },
             "environment": {
               "hazards_active": [],
               "crowd_mood": "frenzied"
             },
             enemy: {
                stats: {
                    health: 100,
                    stamina: 100,
                    strength: 100,
                    agility: 100,
                    speed: 100,
                    sneaking:100,
                    integrity: 100
                },
                "status_effects": [],
                "name": "Spartacus"
             },
             tutor_tip: "try to attack your enemy with your sword fast"
         }`
    },
  },
  {
    user: "{{user2}}",
    content: {
      text:
        '{action: "I feint right, then pivot to slam my shield into his ribs, forcing him off-balance. As he stumbles, I thrust my gladius into his exposed side, aiming to cripple his movement."}'
      ,
      action: "GLADIATOR_ATTACK",
    },
  },
]


const example2 = [
  {
    user: "{{user1}}",
    content: {
      text:
        `{
        "you": {
          "stats": {
            "health": 100,
            "stamina": 90,
            "strength": 85,
            "agility": 110,
            "speed": 105,
            "sneaking": 75,
            "integrity": 95
          },
          "name": "Viper",
          "status_effects": []
        },
        "enemy": {
          "stats": {
            "health": 100,
            "stamina": 95,
            "strength": 110,
            "agility": 90,
            "speed": 85,
            "sneaking": 60,
            "integrity": 100
          },
          "name": "Titan",
          "status_effects": []
        },
        "environment": {
          "hazards_active": ["loose_sand"],
          "crowd_mood": "anticipatory"
         },
        tutor_tip: "try to attack your enemy with your sword fast"
      }`
    },
  },
  {
    user: "{{user2}}",
    content: {
      text:
        '{action: "I use my agility to circle Titan, feinting high with my sword to draw his guard up. As he reacts, I sweep low, aiming to trip him on the loose sand, then thrust my gladius toward his exposed side."}'
      ,
      action: "GLADIATOR_ATTACK",
    },
  },
]



export { example, example2 }
