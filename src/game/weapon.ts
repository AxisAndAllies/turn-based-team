import Gear, { GearStat } from "./gear";

export type WeaponStat = {
  apToReload: number;
  range: number;
  accuracy: number;
  magSize: number;
  damage: number;
};
export class Weapon extends Gear {
  stats: WeaponStat;
  constructor(
    name: string,
    owner: string,
    stats: GearStat,
    weaponStats: WeaponStat
  ) {
    super(stats);
    this.stats = weaponStats;
  }

  reload() {
    //todo
  }
  fire(cell) {
    //todo
  }
}
