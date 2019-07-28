import { ICreature } from "../../interfaces/i-creature";

export const MADELINE_CELESTE: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Shortsword",
            description:
                "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
        }
    ],
    alignment: "Lawful Good",
    challenge: "1",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: ["Cold"],
    damageWeaknesses: [],
    description:
        "Wavy red hair that flows down her back and a bright blue coat trimmed with white fur.",
    features: [
        {
            title: "Keen Hearing and Smell",
            description:
                "Madeline has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        },
        {
            title: "Longbow",
            description:
                "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
        }
    ],
    hp: 20,
    inventory: [
        "50gp",
        "5 Torches",
        "1 Lockpick Kit",
        "1 Sleeping Bag",
        "1 Tent",
        "1 Mess Kit",
        "1 Short Sword",
        "1 Longbow",
        "50 Rations"
    ],
    languages: ["Common", "Elvish"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception: 15"],
    size: "Medium",
    skills: [
        "Acrobatics+8",
        "Nature +4",
        "Perception +5",
        "Stealth +6",
        "Survival +5"
    ],
    speed: "30 ft.",
    stats: {
        str: 11,
        dex: 17,
        con: 12,
        int: 11,
        wis: 13,
        cha: 11
    },
    type: "Human"
};
