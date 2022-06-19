import { GearStat } from "../src/game/gear";
export const gearList: GearStat[] = [
  {
    name: "adrenalineShot",
    apToUse: 5,
    weight: 3,
    isConsumable: true,
    cost: 10,
    description: "Increases AP by 5 next turn.",
  },
  {
    name: "firstAidKit",
    apToUse: 5,
    weight: 3,
    isConsumable: true,
    cost: 10,
    description: "Increases HP by 20",
  },
  {
    name: "largeFirstAidKit",
    apToUse: 5,
    weight: 3,
    isConsumable: true,
    cost: 20,
    description: "Increases HP by 50",
  },
];
