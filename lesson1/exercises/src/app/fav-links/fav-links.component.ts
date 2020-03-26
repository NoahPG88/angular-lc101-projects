import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string[] = ["https://www.rollingstone.com/music/music-lists/500-greatest-albums-of-all-time-156826/led-zeppelin-physical-graffiti-160865/", "https://learn.launchcode.org/courses/216/assignments"];

  favLinksText: string[] = ["Rolling Stone's 500 Greatest Albums", "LaunchCode Assignments"]

  constructor() { }

  ngOnInit() {
  }

}
