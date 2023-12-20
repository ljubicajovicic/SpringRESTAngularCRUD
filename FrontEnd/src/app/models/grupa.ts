import { Smer } from "./smer";

export class Grupa {
    id!: number; // ! jer ne prepoznaje koji je tip podatka dok mu se ne dodeli vrednost
    oznaka!: string;
    smer!: Smer;
}