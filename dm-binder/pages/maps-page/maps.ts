import ABANDONED_HOUSE from "./img/abandoned-house.png";
import ARCANE_PALACE_LEVEL_1 from "./img/arcane-palace-level-1.png";
import ARCANE_PALACE_LEVEL_2 from "./img/arcane-palace-level-2.png";
import ARCANE_PALACE_LEVEL_3 from "./img/arcane-palace-level-3.png";
import ARCANE_PALACE_LEVEL_4 from "./img/arcane-palace-level-4.png";
import ARCTIC_MOUNTAIN from "./img/arctic-mountain.png";
import CHURCH_OF_THE_DAWN from "./img/church-of-the-dawn.png";
import CLOCK_TOWER_DUNGEON_BASEMENT_1 from "./img/clock-tower-dungeon-basement-1.png";
import CLOCK_TOWER_DUNGEON_BASEMENT_2 from "./img/clock-tower-dungeon-basement-2.png";
import CLOCK_TOWER_DUNGEON_BASEMENT_3 from "./img/clock-tower-dungeon-basement-3.png";
import CLOCK_TOWER_DUNGEON_BASEMENT_4 from "./img/clock-tower-dungeon-basement-4.png";
import CLOCK_TOWER_DUNGEON_BASEMENT_5 from "./img/clock-tower-dungeon-basement-5.png";
import CLOCK_TOWER_DUNGEON_LEVEL_1 from "./img/clock-tower-dungeon-level-1.png";
import CLOCK_TOWER_DUNGEON_LEVEL_2 from "./img/clock-tower-dungeon-level-2.png";
import CLOCK_TOWER_DUNGEON_LEVEL_3 from "./img/clock-tower-dungeon-level-3.png";
import CLOCK_TOWER_DUNGEON_LEVEL_4 from "./img/clock-tower-dungeon-level-4.png";
import CLOCK_TOWER_DUNGEON_LEVEL_5 from "./img/clock-tower-dungeon-level-5.png";
import CLOCK_TOWER_DUNGEON_LEVEL_6 from "./img/clock-tower-dungeon-level-6.png";
import CLOCK_TOWER_DUNGEON_LEVEL_7 from "./img/clock-tower-dungeon-level-7.png";
import CLOCK_TOWER_DUNGEON_LEVEL_8 from "./img/clock-tower-dungeon-level-8.png";
import CLOCK_TOWER_DUNGEON_LEVEL_9 from "./img/clock-tower-dungeon-level-9.png";
import CLOCK_TOWER_DUNGEON_LEVEL_10 from "./img/clock-tower-dungeon-level-10.png";
import CLOCK_TOWER_DUNGEON_LEVEL_ROOF from "./img/clock-tower-dungeon-level-roof.png";
import EVIL_GENERAL_STORE from "./img/evil-general-store.png";
import FESTIVAL_DAY from "./img/festival-day.png";
import FESTIVAL_NIGHT from "./img/festival-night.png";
import GASTOLIR_BATTLE_MAP_1 from "./img/gastolir-battle-map-1.png";
import GASTOLIR_BATTLE_MAP_2 from "./img/gastolir-battle-map-2.png";
import GASTOLIR_BATTLE_MAP_3 from "./img/gastolir-battle-map-3.png";
import GASTOLIR_BATTLE_MAP_4 from "./img/gastolir-battle-map-4.png";
import GASTOLIR_BATTLE_MAP_5 from "./img/gastolir-battle-map-5.png";
import GASTOLIR_BATTLE_MAP_6 from "./img/gastolir-battle-map-6.png";
import GASTOLIR_BATTLE_MAP_7 from "./img/gastolir-battle-map-7.png";
import MAGE_LAND_BASEMENT from "./img/mage-land-basement.png";
import MARSH from "./img/marsh.jpg";
import RIVER from "./img/river.png";
import RUINS_OF_ASMODEOUS_BASEMENT from "./img/ruins-of-asmodeous-basement.png";
import RUINS_OF_ASMODEOUS_LEVEL_1 from "./img/ruins-of-asmodeous-level-1.png";
import RUINS_OF_ASMODEOUS_LEVEL_2 from "./img/ruins-of-asmodeous-level-2.png";
import SALOON_BASEMENT from "./img/saloon-basement.png";
import SALOON_LEVEL_1 from "./img/saloon-level-1.png";
import SALOON_LEVEL_2 from "./img/saloon-level-2.png";
import SNOW_FORT_BASEMENT from "./img/snow-fort-basement.png";
import SNOW_FORT_LEVEL_1 from "./img/snow-fort-level-1.png";
import SNOW_FORT_TOWER from "./img/snow-fort-tower.png";
import SNOW_FORT_TUNNELS from "./img/snow-fort-tunnels.png";
import TEMPLE_OF_AO from "./img/TempleOfAo.png";
import TEMPLE_OF_AO_L1 from "./img/TempleOfAoL1.png";

class GalleryImage {
    public src: string;
    public name: string;

    constructor(src, name) {
        this.src = src;
        this.name = name;
    }
}

export const Maps: GalleryImage[] = [
    new GalleryImage(ABANDONED_HOUSE, "Abandoned House"),
    new GalleryImage(ARCANE_PALACE_LEVEL_1, "Arcane Palace Level 1"),
    new GalleryImage(ARCANE_PALACE_LEVEL_2, "Arcane Palace Level 2"),
    new GalleryImage(ARCANE_PALACE_LEVEL_3, "Arcane Palace Level 3"),
    new GalleryImage(ARCANE_PALACE_LEVEL_4, "Arcane Palace Level 4"),
    new GalleryImage(ARCTIC_MOUNTAIN, "Arctic Mountain"),
    new GalleryImage(CHURCH_OF_THE_DAWN, "Church of the Dawn"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_ROOF, "Clock Tower Roof"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_10, "Clock Tower Level 10"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_9, "Clock Tower Level 9"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_8, "Clock Tower Level 8"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_7, "Clock Tower Level 7"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_6, "Clock Tower Level 6"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_5, "Clock Tower Level 5"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_4, "Clock Tower Level 4"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_3, "Clock Tower Level 3"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_2, "Clock Tower Level 2"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_LEVEL_1, "Clock Tower Level 1"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_BASEMENT_1, "Clock Tower Basment 1"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_BASEMENT_2, "Clock Tower Basment 2"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_BASEMENT_3, "Clock Tower Basment 3"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_BASEMENT_4, "Clock Tower Basment 4"),
    new GalleryImage(CLOCK_TOWER_DUNGEON_BASEMENT_5, "Clock Tower Basment 5"),
    new GalleryImage(EVIL_GENERAL_STORE, "Evil General Store"),
    new GalleryImage(FESTIVAL_DAY, "Daytime Festival"),
    new GalleryImage(FESTIVAL_NIGHT, "Nighttime Festival"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_1, "Abandoned Dwarf Mine Level 1"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_2, "Abandoned Dwarf Mine Level 2"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_3, "Abandoned Dwarf Mine Level 3"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_4, "Abandoned Dwarf Mine Level 4"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_5, "Abandoned Dwarf Mine Level 5"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_6, "Abandoned Dwarf Mine Level 6"),
    new GalleryImage(GASTOLIR_BATTLE_MAP_7, "Abandoned Dwarf Mine Level 7"),
    new GalleryImage(MAGE_LAND_BASEMENT, "Mage Land Basement"),
    new GalleryImage(MARSH, "Marsh"),
    new GalleryImage(RIVER, "River"),
    new GalleryImage(
        RUINS_OF_ASMODEOUS_BASEMENT,
        "Ruins of Asmodeous Basement"
    ),
    new GalleryImage(RUINS_OF_ASMODEOUS_LEVEL_1, "Ruins of Asmodeous Level 1"),
    new GalleryImage(RUINS_OF_ASMODEOUS_LEVEL_2, "Ruins of Asmodeous Level 2"),
    new GalleryImage(SALOON_BASEMENT, "Saloon Basement"),
    new GalleryImage(SALOON_LEVEL_1, "Saloon Level 1"),
    new GalleryImage(SALOON_LEVEL_2, "Saloon Level 2"),
    new GalleryImage(SNOW_FORT_BASEMENT, "Snow Fort Basement"),
    new GalleryImage(SNOW_FORT_LEVEL_1, "Snow Fort Level 1"),
    new GalleryImage(SNOW_FORT_TOWER, "Snow Fort Tower"),
    new GalleryImage(SNOW_FORT_TUNNELS, "Snow Fort Tunnels"),
    new GalleryImage(TEMPLE_OF_AO, "Temple of Ao: Ao's Chamber"),
    new GalleryImage(TEMPLE_OF_AO_L1, "Temple of Ao: First Level")
];
