export type GearStat = {
  name: string;
  description?: string;
  cost: number;
  apToUse: number;
  isConsumable: boolean;
  weight: number;
};

export class Gear {
  name: string;
  cost: number;
  apToUse: number;
  isConsumable: boolean;
  weight: number;
  constructor(stats: GearStat) {
    let { name, cost, apToUse, isConsumable, weight } = stats;
    this.name = name;
    this.cost = cost;
    this.apToUse = apToUse;
    this.isConsumable = isConsumable;
    this.weight = weight;
  }

  use(cell) {
    // todo
  }
}
