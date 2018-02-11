import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, item: any) {
    localStorage.setItem(key, item);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
