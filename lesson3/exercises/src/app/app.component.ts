import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';


  takeOff(){
    let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(confirm){
    this.message = "Shuttle in flight";
    this.color = "blue";
    this.height+=10000
    }
  }

  land(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message = "The shuttle has landed.";
    this.color = "green";
    this.height = 0;
  }

  abort(){
    let confirm = window.confirm("Are you certain you would like to abort the mission?");
    if(confirm){
    this.message = "Mission aborted";
    this.color = "red";
    this.height = 0;
    }
  }
}
