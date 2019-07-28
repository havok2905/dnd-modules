export const THE_SOUL_OF_THE_RED_DRAGON = {
    ac: 19,
    actions: [
        {
            title: "Multiattak",
            description:
                "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
            title: "Bite",
            description:
                "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
        },
        {
            title: "Claw",
            description:
                "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
        },
        {
            title: "Tail",
            description:
                "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
        },
        {
            title: "Frightful Presence:",
            description:
                "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become Frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
            title: "Fire Breath (5-6)",
            description:
                "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "17",
    conditionImmunities: [],
    damageImmunities: ["Fire", "Necrotic"],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Legendary Resistance (3/Day)",
            description:
                "If the dragon fails a saving throw, it can choose to succeed instead."
        },
        {
            title: "Incorporeal Movement",
            description:
                "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        }
    ],
    hp: 256,
    inventory: [],
    languages: ["Common", "Draconic"],
    reactions: [],
    savingThrows: ["Dex +6", "Con +13", "Wis + 7", "Cha +11"],
    senses: ["Blindsight 60ft", "Darkvision 120ft", "Passive Perception 23"],
    size: "Huge",
    skills: ["Perception +13", "Stealth +6"],
    speed: "Fly 80ft",
    stats: {
        str: 27,
        dex: 10,
        con: 25,
        int: 16,
        wis: 13,
        cha: 21
    },
    type: "Undead Dragon"
};
