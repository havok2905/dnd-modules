export const ENKIEM_STAGE_2 = {
    ac: 20,
    actions: [
        {
            title: "Multiattack",
            description: "Can make 2 cantrips and one scythe"
        },
        {
            title: "Scythe",
            description:
                "Melee Weapon Attack: +15 to hit. reach 5ft, one target. Hit ( 2d4 slashing damage and 4d12 Necrotic Damage ). One a nat 18, 19, or 20, the target loses a limb at the DM's discretion. It crumbles into ashes."
        },
        {
            title: "Spells",
            description:
                "Chill Touch, Darkness, Eldritch Blast, Command, Crown of Madness, Counter Spell, Blindness/Deafness, Finger of Death"
        },
        {
            title: "Lair Action: Summon Demon Beast",
            description: "Summons 1 Demon Lizard or 1 Demon Hound"
        },
        {
            title: "Lair Action: Falling Debris",
            description:
                "The force of your battle causes the palace to crumble around you. Make a DC17 DEX saving throw. On failure, the players take 3d12 bludgeoning damage, with half on success. On a 10 or lower, the player is knocked prone."
        },
        {
            title: "Lair Action: Command Titan",
            description:
                "A nearby titan can make a slam attack against a target before continuing forward"
        },
        {
            title: "Legendary: Call of Despair",
            description:
                "All players within earshot must make a DC15 WIS saving throw. On failure, the player takes 4d4 psychic damage, has disadvantage on their next attack roll, and begins to question their cause."
        },
        {
            title: "Legendary: Throw Scythe",
            description:
                "Make a scythe attack against a target within 60 feet. Enkiem cannot make a scythe attack on her next turn."
        }
    ],
    alignment: "Lawful Evil",
    challenge: "30",
    conditionImmunities: ["Fear", "Charmed"],
    damageImmunities: ["Necrotic"],
    damageResistances: ["Fire", "Cold", "Lightning", "Thunder", "Force"],
    damageWeaknesses: ["Divine Weaponry"],
    description: "",
    features: [
        {
            title: "Infinite Spell Slots",
            description: "Does not need spell slots to cast spells"
        },
        {
            title: "Legendary Resistance (3/Day)",
            description:
                "Enkiem has advantage on Saving Throws against Spells and other magical Effects."
        },
        {
            title: "Lair Actions",
            description:
                "On initiative count 20 (losing initiative ties), Enkiem takes a lair action. Enkiem can’t use the same effect two rounds in a row:"
        },
        {
            title: "Legendary Actions",
            description:
                "Can take 3 Legendary Actions. Only one legendary action can be used at a time, and only at the end of another creature's turn. Spent legendary Actions are regained at the start of each turn."
        }
    ],
    hp: 600,
    inventory: [],
    languages: ["All"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 25"],
    size: "Medium",
    skills: [],
    speed: "60 ft.",
    stats: {
        str: 25,
        dex: 25,
        con: 25,
        int: 25,
        wis: 25,
        cha: 25
    },
    type: "Goddess"
};
