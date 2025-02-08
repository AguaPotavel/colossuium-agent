const example = [
  {
    user: "{{user1}}",
    content: {
      text:
        `{
              gladiator_1: {
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
             gladiator_2: {
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
             tutor_tip_1: "try to attack your enemy with your sword fast",
             tutor_tip_2: null
         }`
    },
  },
  {
    user: "{{user2}}",
    content: {
      text:
        `{
"action1": "I feint left, then pivot sharply to slam my shield edge into Spartacus's ribs, leveraging my full strength to break his stance. As he recoils, I unleash a rapid flurry of gladius strikes - first a deep thrust toward his thigh, then a rising slash across his shoulder, using the crowd's frenzy to fuel my aggression.",
"action2": "I circle like a panther, suddenly feigning a high overhead chop with my sword. When Maximus raises his shield, I drop and sweep my gladius through the sand, aiming to hook his ankle and destabilize him, following with a vicious thrust toward his kidney region."
}`
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
        "gladiator_1": {
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
        "gladiator_2": {
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
        tutor_tip_1: "try to attack your enemy with your sword fast"
        tutor_tip_2: "try to attack your enemy with your sword fast"
      }`
    },
  },
  {
    user: "{{user2}}",
    content: {
      text:
        `{
"action1": "I explode into motion, feinting high with a lightning sword jab to draw Titan's guard. Mid-lunge, I pivot and kick a wave of loose sand at his face. As he flinches, I slash diagonally across his lead leg's hamstring, using my agility to dance back before he can counter.",
"action2": "I root myself against the shifting sand, shield held like a wall. When Viper's blade skids off my shield boss, I torque my whole body into a devastating overhead chop meant to split his shield - then reverse momentum into a brutal upward shield uppercut aimed at his jaw."
}`
      ,
      action: "GLADIATOR_ATTACK",
    },
  },
]



export { example, example2 }
