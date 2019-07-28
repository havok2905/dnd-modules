export const MAETER = {
    ac: 15,
    actions: [
        {
            title: "Multiattack",
            description:
                "The troll makes three attacks: one with its bite and two with its claws."
        },
        {
            title: "Bite",
            description:
                "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (1d6 + 4) piercing damage."
        },
        {
            title: "Claw",
            description:
                "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: (2d6 + 4) slashing damage."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "5",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "Maeter was a troll who previously lived alone on an island hoarding treasure. One day he was swindled by a group of adventures with fake diamonds. Now he wanders, searching for these adventurers, seeking revenge.",
    features: [
        {
            title: "Keen Smell.",
            description:
                "The troll has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
            title: "Regeneration",
            description:
                "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
        }
    ],
    hp: 84,
    inventory: [],
    languages: ["Giant"],
    reactions: [],
    savingThrows: [],
    senses: ["Darkvision 60ft.", "Passive Perception 12"],
    size: "Large",
    skills: ["Perception +2"],
    speed: "30 ft.",
    stats: {
        str: 18,
        dex: 13,
        con: 20,
        int: 7,
        wis: 9,
        cha: 7
    },
    type: "Giant"
};
