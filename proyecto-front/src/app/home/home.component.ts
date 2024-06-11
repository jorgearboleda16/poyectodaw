import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { url: 'path-to-image1.jpg', alt: 'Image 1', title: 'Gallery Item 1', link: '/page1' },
    { url: 'path-to-image2.jpg', alt: 'Image 2', title: 'Gallery Item 2', link: '/page2' },
    { url: 'path-to-image3.jpg', alt: 'Image 3', title: 'Gallery Item 3', link: '/page3' },
    { url: 'path-to-image4.jpg', alt: 'Image 4', title: 'Gallery Item 4', link: '/page4' }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
