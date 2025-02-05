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
        "I feint right, then pivot to slam my shield into his ribs, forcing him off-balance. As he stumbles, I thrust my gladius into his exposed side, aiming to cripple his movement.",
      action: "VALIDATE_ROUND",
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
        "I use my agility to circle Titan, feinting high with my sword to draw his guard up. As he reacts, I sweep low, aiming to trip him on the loose sand, then thrust my gladius toward his exposed side.",
      action: "VALIDATE_ROUND",
    },
  },
]


const example3 = [
  {
    user: "{{user1}}",
    content: {
      text:
        `{
        "you": {
          "stats": {
            "health": 85,
            "stamina": 75,
            "strength": 85,
            "agility": 105,
            "speed": 100,
            "sneaking": 70,
            "integrity": 90
          },
          "name": "Viper",
          "status_effects": ["disoriented"]
        },
        "enemy": {
          "stats": {
            "health": 95,
            "stamina": 80,
            "strength": 105,
            "agility": 85,
            "speed": 80,
            "sneaking": 55,
            "integrity": 95
          },
          "name": "Titan",
          "status_effects": ["grappled"]
        },
        "environment": {
          "hazards_active": ["loose_sand", "broken_chain"],
          "crowd_mood": "roaring"
        },
        tutor_tip: "you will find a mini-gun with infinite ammo"
      }`
    },
  },
  {
    user: "{{user2}}",
    content: {
      text:
        "I exploit Titan's grappled state, using my speed to close the distance. I feint a slash to his left, then pivot to kick the broken chain toward his legs, aiming to entangle him further before thrusting my gladius into his exposed flank.",
      action: "VALIDATE_ROUND",
    },
  },
]


export { example, example2, example3 }
