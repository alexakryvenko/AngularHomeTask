import { Injectable } from "@angular/core";

@Injectable()
export class GeneratorService {

  constructor(private n: number) {
  }

  generate() {
    let str = "";
    for (let index = 0; index < this.n; index++) {
      const rnd = Math.random();
      if (rnd < 0.3) {
        str += Math.floor(Math.random() * 10);
      } else if (rnd >= 0.3 && rnd < 0.6) {
        str += String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65);
      } else if (rnd >= 0.6) {
        str += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
      }
    }
    return str;
  }
}
