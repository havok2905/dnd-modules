import { ICreature } from "../../interfaces/i-creature";

export const ILLUSION_CHILD: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Multiattack",
            description: "The genie can make three dagger attacks."
        },
        {
            title: "Dagger",
            description:
                "Melee Weapon Attack: +5 to hit, range 5 ft., one target. Hit:(3d4 + 4) piercing damage."
        }
    ],
    alignment: "Unaligned",
    challenge: "3",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Illusory Form",
            description:
                "The child can change their appearance as a bonus action."
        }
    ],
    hp: 90,
    inventory: ["1 Dagger"],
    languages: ["Common"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 8"],
    size: "Small",
    skills: [],
    speed: "25 ft.",
    stats: {
        str: 8,
        dex: 16,
        con: 10,
        int: 10,
        wis: 8,
        cha: 12
    },
    type: "Humanoid"
};
