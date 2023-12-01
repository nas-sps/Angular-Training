import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , OnDestroy {

mySubscription: Subscription | undefined  
name: string = 'Nashra';
constructor(private service : SubscribeService){}
subs(){
  this.service.callme(this.name)
}
ngOnInit(): void {
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("Promise success")
    },1000);
  })

  promise.then(result => console.log(result))

  const observable = new Observable(sub => {
    setTimeout(() => {
      sub.next("observable resolved")
      // sub.next("observable resolved2")
      // sub.next("observable resolved3")
      // sub.next("observable resolved4")
    },1000);
  })
  // observable.pipe(filter((d) => d === "observable resolved2")).
  this.mySubscription = observable.subscribe(result => console.log(result))
}

ngOnDestroy(): void {
  this.mySubscription?.unsubscribe();
}
}
