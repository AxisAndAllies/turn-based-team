import { Gear } from "./gear";

export enum Direction {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  DOWN = "DOWN",
  UP = "UP",
}

export type PlayerStat = {
  dirFacing: Direction;
  cellLoc: string;
  mp: number;
  ap: number;
  isSuppressed: boolean;
};

export class Unit {
  name: string;
  baseMP: number;
  baseAP: number;
  maxWeight: number;
  owner: string;
  gear: Gear[] = [];
  stats: PlayerStat;
  constructor(name: string, owner: string) {
    this.baseMP = 10;
    this.baseAP = 6;
    this.owner = owner;
    this.name = name;
    this.maxWeight = 100;
    this.stats = {};
  }

  addGear(newGear: Gear) {
    this.gear.push(newGear);
  }

  encumbrance() {
    // more gear = less mp, less ap
  }

  turn() {
    // costs MP to turn (more if heavier)
  }

  equip() {
    // equip costs 1 AP
  }

  vaultOver(cell) {
    // costs some MP or AP? only if light gear
  }
}
