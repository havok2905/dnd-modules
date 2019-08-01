import { ICreature } from "../../interfaces/i-creature";

export const ILLUSION_GENIE: ICreature = {
    ac: 13,
    actions: [
        {
            title: "Multiattack",
            description:
                "The genie can make three scimitar attacks or one scimitar attack and one spell."
        },
        {
            title: "Scimitar",
            description:
                "Melee Weapon Attack: +9 to hit, range 5 ft., one target. Hit:(3d6 + 8) slashing damage."
        },
        {
            title: "(Lair Action) Lair Spell",
            description: "You may make a spell action"
        },
        {
            title: "(Lair Action) Illusory Servants",
            description:
                "You may being into reality 1d6 creatures of CR3 and lower into existence. They act directly after you in initiative."
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "21",
    conditionImmunities: ["Charmed", "Frightened", "Stunned"],
    damageImmunities: [],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "A plumb, short, jet black skinned, man. He wears a red vest, a tightly wrapped white turban, and poofy white pants.",
    features: [
        {
            title: "Spellcasting",
            description:
                "The genie is an 18th-level spellcaster. Its Spellcasting Ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The genie has the following Wizard Spells prepared: *Cantrips (At Will): Encode Thoughts, Minor Illusion, Toll the Dead. *1st (4 Slots) Color Spray, Mage Armor, Silent Image, Witch Bolt, *2nd (3 Slots) Enlarge / Reduce, Invisibility, Shadow Blade. *3rd (3 Slots) Bestow Curse, Counterspell, Fear. *4th (3 Slots) Hallucinatory Terrain, Phantasmal Killer. *5th (3 Slots) Creation, Dominate Person. *6th (1 Slot) Chain Lightning, Disintegrate. *7th ( 1 Slot ) Mirage Arcane, Reverse Gravity. *8th ( 1 Slot ) Control Weather, Telepathy. *9th ( 1 Slot ) Weird."
        },
        {
            title: "Illusory Reality",
            description:
                "You have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can Choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross. The object can’t deal damage or otherwise directly harm anyone."
        },
        {
            title: "Illusory Self",
            description:
                "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates. Once you use this feature, you can’t use it again for 24 hours."
        }
    ],
    hp: 135,
    inventory: [],
    languages: ["Common", "Infernal", "Abyssal", "Elvish"],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 14"],
    size: "Medium",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 11,
        dex: 16,
        con: 12,
        int: 20,
        wis: 14,
        cha: 20
    },
    type: "Humanoid"
};
