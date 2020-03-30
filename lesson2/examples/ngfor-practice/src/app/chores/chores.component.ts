import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {

   chores = [
      {title: "Yesterday's Chores", tasks: ["Get awesome"]},
      {title: "Today's Chores", tasks: ["Stay awesome", "find some extra awesome for others"]},
      {title: "Tomorrow's Chores", tasks: ['Buy groceries', "Clean bathroom"]},
   ];

   constructor() { }

   ngOnInit() {
   }

}
