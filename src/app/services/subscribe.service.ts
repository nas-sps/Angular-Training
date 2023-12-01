import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  arr: string[] = ["Toy", "Phone", "Computer", "Box", "Book"]

  constructor() { }

  callme(data:string){
    alert(`${data} subscribed to this channel`);
  }

  data() {
    return this.arr;
  }
}
