import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  getItem(key: string): string {
    return JSON.parse(sessionStorage.getItem(key));
  }

  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

}
