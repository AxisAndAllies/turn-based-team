import Gear, { GearStat } from "./gear";

export type WeaponStat = {
  apToReload: number;
  range: number;
  accuracy: number;
  magSize: number;
  bulletsPerFire: number;
  damage: number;
};
export class Weapon extends Gear {
  baseStat: WeaponStat;
  constructor(
    name: string,
    owner: string,
    stats: GearStat,
    weaponStats: WeaponStat
  ) {
    super(stats);
    this.baseStat = weaponStats;
  }

  reload() {
    // a tac reload only uses half AP for full reload
    //todo
  }
  fire(cell) {
    //todo
  }
}
