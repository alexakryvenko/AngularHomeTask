import { Injectable } from "@angular/core";

export interface Options {
  login: string;
  id: number;
  email: string;
}

@Injectable()
export class ConfigOptionsService {

  private _options: Options;

  constructor() { }

  set options(value: Options) {
    this._options = value;
  }

  get options() {
    return this._options;
  }
}
