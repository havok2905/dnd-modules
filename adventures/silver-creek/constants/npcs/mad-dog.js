export default {
    ac: 15,
    actions: [
        {
            title: "Multiattack",
            description: "Can make two pistol attacks and one dagger attack."
        },
        {
            title: "Pistol",
            description:
                "Ranged Attack (30/90). Reloading. +5 to hit. 1d10 piercing damage."
        },
        {
            title: "Dagger",
            description:
                "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d4 + 3) piercing damage."
        },
        {
            title: "Dagger",
            description:
                "Ranged Weapon Attack: +5 to hit, reach 20/60 ft., one target. Hit: (1d4 + 3) piercing damage."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "3",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 65,
    inventory: [
        "Waterskin",
        "Dagger",
        "Pistol",
        "Ruby Pendant",
        "Ledger",
        "Wooden Pipe",
        "Thieves Tools",
        "Pipe Weed",
        "55 Gold Pieces",
        "118 Silver Pieces",
        "23 Copper Pieces"
    ],
    languages: ["Common"],
    reactions: [
        {
            title: "Disarm",
            description:
                "Mad Dog may use this action only if his gun is already loaded and can see an incoming attack. Make an attack role against the target's AC. On success, the attack is canceled and the target drops their weapon."
        },
        {
            title: "Quick Draw",
            description:
                "Mad dog gains advantage on initiative rolls in 1v1 combat."
        }
    ],
    savingThrows: ["Str +4", "Dex +5", "Wis +2"],
    senses: [],
    size: "Medium",
    skills: ["Athletics +4", "Deception +4", "Slight of Hand +7"],
    speed: "30 ft.",
    stats: {
        str: 15,
        dex: 16,
        con: 14,
        int: 14,
        wis: 11,
        cha: 14
    },
    type: "Human"
};
