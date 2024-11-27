import { Component } from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";
import {MenubarModule} from "primeng/menubar";
import {CommonModule, NgIf} from "@angular/common";
import {MenuItem, MenuItemCommandEvent, PrimeTemplate} from "primeng/api";
import {Ripple, RippleModule} from "primeng/ripple";
import {Router} from '@angular/router';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    AvatarModule,
    BadgeModule,
    InputTextModule,
    MenubarModule,
    NgIf,
    PrimeTemplate,
    Ripple,
    MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, Button
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  items: MenuItem[] | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command:()=> {
          this.router.navigate(['/home']);
        }
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U'
          },
          {
            separator: true
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
      }
    ];
  }
  redToLogin = ()=>{
    this.router.navigate(['/login']);
  }
}
