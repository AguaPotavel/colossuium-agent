const example = [
  {
    user: "{{user1}}",
    content: {
      text:
        `{
              fighter1: {
                text: "I feint left, then slam my shield into his side, disrupting his balance. As he stumbles, I drive my gladius into his exposed thigh, then finish with a diagonal slash to his shoulder. He falls, defeated.",
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
             fighter2: {
                text: "I feint left to draw his guard, then aim a shield bash to his ribs to create an opening. With his balance compromised, I thrust my gladius toward his exposed thigh, hoping to cripple his movement and end the fight swiftly."
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
             }`
    },
  },
  {
    user: "{{user2}}",
    content: {
      text:
        `
          {
            "fighter1": {
                stats: {
                health: 100,
                stamina: 80,
                strength: 100,
                agility: 100,
                speed: 100,
                sneaking:100,
                integrity: 100,
              },
              name: "Spartacus",
              "status_effects": [],
            },
            "environment": {
              "hazards_active": [],
              "crowd_mood": "frenzied"
            },
            "fighter2": {
                stats: {
                health: 80,
                stamina: 90,
                strength: 100,
                agility: 100,
                speed: 100,
                sneaking:100,
                integrity: 100,
              },
              "status_effects": ["bleeding"],
              name: "Maximus"
            },
            narrative: "Spartacus charges forward, his blade gleaming under the arena’s harsh light, aiming a swift strike at Maximus’s left flank. Maximus sidesteps, but Spartacus’s move is a ruse. With a powerful spin, Spartacus swings his shield like a battering ram, crashing it into Maximus’s right side, sending him stumbling. Seizing the moment, Spartacus thrusts his sword toward Maximus’s exposed shoulder, the steel singing through the air as he seeks to claim victory in a blaze of glory. The crowd roars, their voices shaking the very ground beneath them."
            }
           `,
      action: "VALIDATE_ROUND",
    },
  },
]

const example2 = [
  {
    user: "{{user1}}",
    content: {
      text: `{
        "fighter1": {
          "text": "I feint high with my spear, then drop low to sweep your legs with my chain. When you fall, I'll pin you with the spear's haft.",
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
        "fighter2": {
          "text": "I'll catch your chain mid-swing, yank you off balance, and counter with an elbow strike to your temple.",
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
        }
      }`
    }
  },
  {
    user: "{{user2}}",
    content: {
      text: `{
        "fighter1": {
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
        "fighter2": {
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
        "narrative": "Viper's chain wraps around Titan's arm, but the giant uses his raw strength to swing Viper into the sand. As Viper tumbles, Titan's follow-up strike glances off her shoulder guard. They end in a clinch, Viper's spear pressed against Titan's throat while his fist grips her armor seams."
        }
      }`,
      action: "VALIDATE_ROUND"
    }
  }
];



// Exemplo 3 - Duelo de Honra
const example3 = [
  {
    user: "{{user1}}",
    content: {
      text: `{
        "fighter1": {
          "stats": {
            "health": 100,
            "stamina": 95,
            "strength": 90,
            "agility": 100,
            "speed": 110,
            "sneaking": 60,
            "integrity": 120
          },
          "name": "Lord Kestrel",
          "status_effects": ["inspired"],
          "environment": {
            "hazards_active": ["oiled_floor"],
            "crowd_mood": "respectful"
          },
          "narrative": "The ceremonial gong echoes. Kestrel's ornate armor gleams as he salutes the imperial box, his movements precise on the treacherously polished stones."
        }
      }`
    }
  },
  {
    user: "{{user2}}",
    content: {
      text: `{
        "fighter1": {
          "stats": {
            "health": 95,
            "stamina": 80,
            "strength": 85,
            "agility": 95,
            "speed": 105,
            "sneaking": 55,
            "integrity": 115
          },
          "name": "Lord Kestrel",
          "status_effects": ["disarmed"]
        },
        "fighter2": {
          "stats": {
            "health": 85,
            "stamina": 70,
            "strength": 105,
            "agility": 80,
            "speed": 90,
            "sneaking": 75,
            "integrity": 90
          },
          "name": "Baron Vex",
          "status_effects": ["dishonored"]
        },
        "environment": {
          "hazards_active": ["oiled_floor", "scattered_weapons"],
          "crowd_mood": "shocked"
        },
        "narrative": "Vex's dirty trick - salt thrown at Kestrel's eyes - backfires as the crowd boos. Slipping on the oiled stones, Kestrel's sword skids away but he snatches a fallen dagger, its edge finding Vex's throat as the Baron trips over his own cloak."
      }`,
      action: "VALIDATE_ROUND"
    }
  }
];

 const example4 = [
  {
    user: "{{user1}}",
    content: {
      text: `{
        "fighter1": {
          "text": "I'll use hit-and-run tactics: strike with throwing knives from a distance, then fade into the arena's smoke clouds.",
          "stats": {
            "health": 100,
            "stamina": 100,
            "strength": 75,
            "agility": 120,
            "speed": 115,
            "sneaking": 110,
            "integrity": 80
          },
          "name": "Ghost",
          "status_effects": []
        },
        "fighter2": {
          "text": "I'll advance steadily, using my tower shield to block projectiles while scattering caltrops to limit your mobility.",
          "stats": {
            "health": 100,
            "stamina": 100,
            "strength": 100,
            "agility": 85,
            "speed": 90,
            "sneaking": 50,
            "integrity": 100
          },
          "name": "Bastion",
          "status_effects": []
        },
        "environment": {
          "hazards_active": ["smoke_bombs"],
          "crowd_mood": "curious"
        }
      }`
    }
  },
  {
    user: "{{user2}}",
    content: {
      text: `{
        "fighter1": {
          "stats": {
            "health": 90,
            "stamina": 85,
            "strength": 75,
            "agility": 115,
            "speed": 110,
            "sneaking": 105,
            "integrity": 75
          },
          "name": "Ghost",
          "status_effects": ["caltrop_wound"]
        },
        "fighter2": {
          "stats": {
            "health": 80,
            "stamina": 90,
            "strength": 95,
            "agility": 80,
            "speed": 85,
            "sneaking": 45,
            "integrity": 95
          },
          "name": "Bastion",
          "status_effects": ["bleeding"]
        },
        "environment": {
          "hazards_active": ["smoke_bombs", "caltrop_field"],
          "crowd_mood": "entertained"
        },
        narrative: "Ghost's knives find gaps in Bastion's armor, but steps on a caltrop during retreat. Bastion bleeds from three wounds but corners Ghost against the arena wall, shield raised for a crushing blow as smoke swirls around them."
        }
      }`,
      action: "VALIDATE_ROUND"
    }
  }
];

 const example5 = [
  {
    user: "{{user1}}",
    content: {
      text: `{
        "fighter1": {
          "text": "I'll charge with my lance, aiming for your mount's legs. When you fall, I'll finish with my mace.",
          "stats": {
            "health": 100,
            "stamina": 95,
            "strength": 110,
            "agility": 80,
            "speed": 105,
            "sneaking": 40,
            "integrity": 90
          },
          "name": "Sir Alden",
          "status_effects": []
        },
        "fighter2": {
          "text": "I'll sidestep your charge and use my net to entangle your weapon arm, then drag you from the saddle.",
          "stats": {
            "health": 100,
            "stamina": 100,
            "strength": 95,
            "agility": 105,
            "speed": 110,
            "sneaking": 70,
            "integrity": 85
          },
          "name": "Desert Wind",
          "status_effects": []
        },
        "environment": {
          "hazards_active": ["uneven_terrain"],
          "crowd_mood": "eager"
        }
      }`
    }
  },
  {
    user: "{{user2}}",
    content: {
      text: `{
        "fighter1": {
          "stats": {
            "health": 75,
            "stamina": 70,
            "strength": 105,
            "agility": 75,
            "speed": 95,
            "sneaking": 35,
            "integrity": 85
          },
          "name": "Sir Alden",
          "status_effects": ["dismounted", "entangled"]
        },
        "fighter2": {
          "stats": {
            "health": 90,
            "stamina": 85,
            "strength": 90,
            "agility": 100,
            "speed": 105,
            "sneaking": 65,
            "integrity": 80
          },
          "name": "Desert Wind",
          "status_effects": ["mounted_advantage"]
        },
        "environment": {
          "hazards_active": ["uneven_terrain", "spooked_horses"],
          "crowd_mood": "ecstatic"
        },
        narrative:"Alden's lance tears through Desert Wind's cloak but misses the mount. The net wraps around Alden's arm, yanking him into the dust. Desert Wind circles with raised scimitar as Alden struggles with the tangled net, his warhorse stampeding dangerously close."
        }
      }`,
      action: "VALIDATE_ROUND"
    }
  }
];

export { example, example2, example3, example4, example5 };
