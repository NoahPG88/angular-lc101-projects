import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Have Character';
  image1 = 'https://akns-images.eonline.com/eol_images/Entire_Site/2019720/rs_600x600-190820151248-600-brad-pitt-inglorious-basterds-me-82019.jpg?fit=around|1200:1200&crop=1200:1200;center,top&output-quality=90';
  image2 = 'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60';
  image3 = 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60';

  constructor() { }

  ngOnInit() {
  }

}