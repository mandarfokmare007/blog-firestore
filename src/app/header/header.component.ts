import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  visibleSidebar1: any;
  items!: MenuItem[];
  homePost: any;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },

      {
        label: 'Posts',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/detailposts',
      },
      {
        label: 'Add posts',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/posts',
      },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];

    // this.homePost = localStorage.getItem('posts');
    // this.homePost = JSON.parse(this.homePost);
  }
}
