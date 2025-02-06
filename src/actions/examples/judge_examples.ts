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
                    defense: 100,
                    sneaking:100,
                    dexterity: 100
                    wisdom: 80,
                },
                name: "Maximus"
                status_effects: [],
             },
             environment: {
               hazards_active: [],
               crowd_mood: "frenzied"
             },
             last_action: null,
             fighter2: {
                text: "I feint left to draw his guard, then aim a shield bash to his ribs to create an opening. With his balance compromised, I thrust my gladius toward his exposed thigh, hoping to cripple his movement and end the fight swiftly."
                stats: {
                    health: 100,
                    stamina: 100,
                    strength: 100,
                    agility: 100,
                    defense: 100,
                    sneaking:100,
                    dexterity: 100
                    wisdom: 80,
                },
                status_effects: [],
                name: "Spartacus"
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
        "stats": {
          "health": 85,
          "stamina": 90,
          "strength": 100,
          "agility": 100,
          "defense": 100,
          "sneaking": 100,
          "dexterity": 100,
          "wisdom": 80
        },
        "name": "Maximus",
        "status_effects": [],
        "intended_action": "Feint left, shield slam to disrupt balance, then attack exposed thigh and shoulder."
      },
      "fighter2": {
        "stats": {
          "health": 80,
          "stamina": 85,
          "strength": 100,
          "agility": 100,
          "defense": 100,
          "sneaking": 100,
          "dexterity": 100,
          "wisdom": 80
        },
        "name": "Spartacus",
        "status_effects": [],
        "intended_action": "Feint left, shield bash to ribs, then thrust gladius into exposed thigh."
      },
      "environment": {
        "hazards_active": [],
        "crowd_mood": "frenzied"
      },
      "narrative": "Maximus feints left, slamming his shield into Spartacus's side, disrupting his balance. As Spartacus stumbles, Maximus drives his gladius into Spartacus's thigh, causing significant damage. Spartacus attempts a counter with a shield bash but misses due to his compromised stance. Maximus finishes with a diagonal slash to Spartacus's shoulder, leaving him severely wounded."
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
        fighter1: {
          text: "I feint high with my spear, then drop low to sweep your legs with my chain. When you fall, I'll pin you with the spear's haft.",
          stats: {
            health: 100,
            stamina: 90,
            strength: 85,
            agility: 110,
            defense: 105,
            sneaking: 75,
            dexterity: 95
            wisdom: 80,
          },
          name: "Viper",
          status_effects: []
        },
        last_action: null,
        fighter2: {
          text: "I'll catch your chain mid-swing, yank you off balance, and counter with an elbow strike to your temple.",
          stats: {
            health: 100,
            stamina: 95,
            strength: 110,
            agility: 90,
            defense: 85,
            sneaking: 60,
            dexterity: 100
            wisdom: 60,
          },
          name: "Titan",
          status_effects: []
        },
        environment: {
          hazards_active: ["loose_sand"],
          crowd_mood: "anticipatory"
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
      "stamina": 80,
      "strength": 85,
      "agility": 110,
      "defense": 105,
      "sneaking": 75,
      "dexterity": 95,
      "wisdom": 80
    },
    "name": "Viper",
    "status_effects": ["exhaustion"],
    "intended_action": "Feint high with spear, sweep legs with chain, then pin with spear haft."
  },
  "fighter2": {
    "stats": {
      "health": 95,
      "stamina": 85,
      "strength": 110,
      "agility": 90,
      "defense": 85,
      "sneaking": 60,
      "dexterity": 100,
      "wisdom": 60
    },
    "name": "Titan",
    "status_effects": ["disoriented"],
    "intended_action": "Catch chain mid-swing, yank Viper off balance, counter with elbow strike to temple."
  },
  "environment": {
    "hazards_active": ["loose_sand"],
    "crowd_mood": "excited"
  },
  "narrative": "Viper feints high with his spear, then sweeps low with his chain. Titan attempts to catch the chain but slips on the loose sand, missing his counter. Viper capitalizes, pinning Titan with the spear haft. Titan, disoriented, struggles to regain footing, while Viper's agility gives him the upper hand, though he begins to tire."
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
        fighter1: {
          text: "I feint high with my spear, then drop low to sweep your legs with my chain. When you fall, I'll pin you with the spear's haft.",
          stats: {
            "health": 90,
            "stamina": 80,
            "strength": 85,
            "agility": 110,
            "defense": 105,
            "sneaking": 75,
            "dexterity": 95,
            "wisdom": 80
          },
          name: "Viper",
          "status_effects": ["exhaustion"],
        },
        fighter2: {
          text: "I'll catch your chain mid-swing, yank you off balance, and counter with an elbow strike to your temple.",
          stats: {
            "health": 95,
            "stamina": 85,
            "strength": 110,
            "agility": 90,
            "defense": 85,
            "sneaking": 60,
            "dexterity": 100,
            "wisdom": 60
          },
          name: "Titan",
          "status_effects": ["disoriented"],
        },
        environment: {
          hazards_active: ["loose_sand"],
          crowd_mood: "anticipatory"
        },
        last_action: "Viper feints high with his spear, then sweeps low with his chain. Titan attempts to catch the chain but slips on the loose sand, missing his counter. Viper capitalizes, pinning Titan with the spear haft. Titan, disoriented, struggles to regain footing, while Viper's agility gives him the upper hand, though he begins to tire."
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
            "stamina": 70,
            "strength": 85,
            "agility": 110,
            "defense": 105,
            "sneaking": 75,
            "dexterity": 95,
            "wisdom": 80
          },
          "name": "Viper",
          "status_effects": ["exhaustion", "bleeding"],
          "intended_action": "Feint high with spear, sweep legs with chain, then pin with spear haft."
        },
        "fighter2": {
          "stats": {
            "health": 90,
            "stamina": 75,
            "strength": 110,
            "agility": 90,
            "defense": 85,
            "sneaking": 60,
            "dexterity": 100,
            "wisdom": 60
          },
          "name": "Titan",
          "status_effects": ["disoriented", "exhaustion"],
          "intended_action": "Catch chain mid-swing, yank Viper off balance, counter with elbow strike to temple."
        },
        "environment": {
          "hazards_active": ["loose_sand"],
          "crowd_mood": "frenzied"
        },
        "narrative": "Viper, despite exhaustion, executes his plan, sweeping Titan's legs with the chain. Titan, still disoriented, fails to counter effectively and is pinned by Viper's spear haft. Viper lands a shallow thrust to Titan's side, causing bleeding, but Titan's strength allows him to break free, landing a glancing elbow strike that leaves Viper bleeding. Both fighters are now visibly exhausted, but the crowd is frenzied by the intense exchange."
}`      ,
      action: "VALIDATE_ROUND"
    }
  }
];

 const example4 = [
  {
    user: "{{user1}}",
    content: {
      text: `{
        fighter1: {
          text: "I'll use hit-and-run tactics: strike with throwing knives from a distance, then fade into the arena's smoke clouds.",
          stats: {
            health: 100,
            stamina: 100,
            strength: 75,
            agility: 120,
            defense: 115,
            sneaking: 110,
            dexterity: 80
            wisdom: 10,
          },
          name: "Ghost",
          status_effects: []
        },
        fighter2: {
          text: "I'll advance steadily, using my tower shield to block projectiles while scattering caltrops to limit your mobility.",
          stats: {
            health: 100,
            stamina: 100,
            strength: 100,
            agility: 85,
            defense: 90,
            sneaking: 50,
            dexterity: 100,
            wisdom: 100,
          },
          name: "Bastion",
          status_effects: []
        },
        environment: {
          hazards_active: ["smoke_bombs"],
          crowd_mood: "curious"
        },
        last_action: null
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
            "agility": 120,
            "defense": 115,
            "sneaking": 110,
            "dexterity": 80,
            "wisdom": 10
          },
          "name": "Ghost",
          "status_effects": ["bleeding"]
        },
        "fighter2": {
          "stats": {
            "health": 95,
            "stamina": 90,
            "strength": 100,
            "agility": 85,
            "defense": 90,
            "sneaking": 50,
            "dexterity": 100,
            "wisdom": 100
          },
          "name": "Bastion",
          "status_effects": ["exhaustion"]
        },
        "environment": {
          "hazards_active": ["smoke_bombs", "caltrops"],
          "crowd_mood": "tense"
        },
        "narrative": "Ghost darted through the smoke, throwing knives with precision. One struck Bastion's arm, causing bleeding, but the shield absorbed most of the impact. Bastion advanced, scattering caltrops that nicked Ghost's leg as they retreated, leaving a trail of blood. The crowd grew tense as both fighters showed signs of strain."
}`      ,
      action: "VALIDATE_ROUND"
    }
  }
];

 const example5 = [
  {
    user: "{{user1}}",
    content: {
      text: `{
        fighter1: {
          text: "I'll charge with my lance, aiming for your mount's legs. When you fall, I'll finish with my mace.",
          stats: {
            health: 100,
            stamina: 95,
            strength: 110,
            agility: 80,
            defense: 105,
            sneaking: 40,
            dexterity: 90,
            wisdom: 80,
          },
          name: "Sir Alden",
          status_effects: []
        },
        fighter2: {
          text: "I'll sidestep your charge and use my net to entangle your weapon arm, then drag you from the saddle.",
          stats: {
            health: 100,
            stamina: 100,
            strength: 95,
            agility: 105,
            defense: 110,
            sneaking: 70,
            dexterity: 85,
            wisdom: 90,
          },
          name: "Desert Wind",
          status_effects: []
        },
        environment: {
          hazards_active: ["uneven_terrain"],
          crowd_mood: "eager"
        }
      }`
    }
  },
  {
    user: "{{user2}}",
    content: {
      text: `{
        fighter1: {
          stats: {
            health: 75,
            stamina: 70,
            strength: 105,
            agility: 75,
            defense: 95,
            sneaking: 35,
            dexterity: 85,
            wisdom: 80,
          },
          name: "Sir Alden",
          status_effects: ["dismounted", "entangled"]
        },
        fighter2: {
          stats: {
            health: 90,
            stamina: 85,
            strength: 90,
            agility: 100,
            defense: 105,
            sneaking: 65,
            dexterity: 80,
            wisdom: 90,
          },
          name: "Desert Wind",
          status_effects: ["mounted_advantage"]
        },
        environment: {
          hazards_active: ["uneven_terrain", "spooked_horses"],
          crowd_mood: "ecstatic"
        },
        narrative:"Alden's lance tears through Desert Wind's cloak but misses the mount. The net wraps around Alden's arm, yanking him into the dust. Desert Wind circles with raised scimitar as Alden struggles with the tangled net, his warhorse stampeding dangerously close."
        }
      }`,
      action: "VALIDATE_ROUND"
    }
  }
];

export { example, example2, example3, example4, example5 };
