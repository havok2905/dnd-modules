export default {
    ac: 16,
    actions: [
        {
            title: "Multiattack",
            description:
                "The Stranger makes three weapon melee attacks or three ranged attacks."
        },
        {
            title: "Shortsword",
            description:
                "Melee Weapon Attack +7 to hit, reach 5 ft, one target. Hit: 8 (1d6 +5 ) slashing damage."
        },
        {
            title: "longbow",
            description:
                "Ranged Weapon Attack +7 to hit, range 150/600ft, one target. Hit: 9 (1d8 +5 ) piercing damage."
        }
    ],
    alignment: "Lawful Good",
    challenge: "5",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Cold"],
    damageWeaknesses: ["Fire"],
    description:
        "Cloaked in navy blue, face shadowed by a hood, all you can see is long dark hair trailing down her shoulders.",
    features: [
        {
            title: "Wanderer",
            description:
                "During a stranger rest the scout can find food and fresh water for him, provided that the land has such things."
        }
    ],
    hp: 120,
    inventory: [
        "10 dried fish",
        "1 fox carcass",
        "1 bundle firewood",
        "1 coil of hemp rope"
    ],
    languages: ["Common", "Elvish", "Celestial", "Sylvan"],
    reactions: [],
    savingThrows: ["CON +5", "DEX +7"],
    senses: ["Passive Perception 14", "Darkvision 60ft."],
    size: "Medium",
    skills: ["Perception + 4", "Survival +4", "Nature +11"],
    speed: "40 ft.",
    stats: {
        str: 12,
        dex: 20,
        con: 16,
        int: 10,
        wis: 15,
        cha: 10
    },
    type: "Wood Elf"
};
