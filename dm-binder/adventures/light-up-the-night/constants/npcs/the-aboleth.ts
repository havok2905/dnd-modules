export const THE_ABOLETH = {
    ac: 17,
    actions: [
        {
            title: "Multiattack",
            description: "The aboleth makes three tentacle/kick attacks."
        },
        {
            title: "Tentacle",
            description:
                "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed"
        },
        {
            title: "Kick",
            description:
                "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: (3d6 + 5) bludgeoning damage."
        },
        {
            title: "Enslave (3/day)",
            description:
                "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
        },
        {
            title: "Psychic Drain (Costs 2 Actions)",
            description:
                "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
        }
    ],
    alignment: "Lawful Evil",
    challenge: "13",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "An aboleth, but with metal spider legs",
    features: [
        {
            title: "Amphibious",
            description: "The aboleth can breathe air and water."
        },
        {
            title: "Probing Telepathy",
            description:
                "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
        }
    ],
    hp: 135,
    inventory: [],
    languages: ["Deep Speech", "Telepathy 120 Ft."],
    reactions: [],
    savingThrows: ["Con +6", "Int +8", "Wis +6"],
    senses: ["Darkvision 120ft.", "Passive Perception 20"],
    size: "Large",
    skills: ["History +12", "Perception +10"],
    speed: "30 ft, Swim 40ft.",
    stats: {
        str: 21,
        dex: 15,
        con: 15,
        int: 18,
        wis: 15,
        cha: 18
    },
    type: "Aberration"
};
