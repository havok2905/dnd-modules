import { ICreature } from "../../interfaces/i-creature";

export const CECELIA_MARILUZE: ICreature = {
    ac: 15,
    actions: [
        {
            title: "multiattack",
            description:
                "Can make three long sword attacks or two long sword attacks and one cantrip"
        },
        {
            title: "Flame Rite Longsword",
            description:
                "+5 to hit, 1d8+6 slashing damage and 2d8 fire damage. Lose 5 hit points"
        },
        {
            title: "Blood Curse of Binding",
            description:
                "As a bonus action, you can attempt to bind an enemy no more than one size larger than you within 30 feet. The target must succeed on a DC15 STR saving throw or have their speed be reduced to 0 until the end of your next turn."
        },
        {
            title: "Chill Touch",
            description:
                "+5 to hit. Range 120ft. 1d8 necrotic damage and can't regain hit points until the start of your next turn."
        },
        {
            title: "Spare the Dying",
            description:
                "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
        }
    ],
    alignment: "Chaotic Neutral",
    challenge: "7",
    conditionImmunities: [],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "A toned, young woman, around 25-30, with tan skin and short, light blonde, hair. She has magenta eyes and a long scar across her left eye.",
    features: [],
    hp: 168,
    inventory: [
        "1 Long Sword",
        "1 Locket with a photo of her lover",
        "1 Dagger once belonging to Diemardo"
    ],
    languages: ["Common"],
    reactions: [],
    savingThrows: ["Wisdom +7", "Strength +7"],
    senses: ["Passive Perception 14"],
    size: "Medium",
    skills: ["Investigation +4", "Insight +7"],
    speed: "30 ft.",
    stats: {
        str: 18,
        dex: 15,
        con: 19,
        int: 12,
        wis: 18,
        cha: 14
    },
    type: "Human"
};
