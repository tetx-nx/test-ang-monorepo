import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h1>Welcome!</h1> <br />
    <a [routerLink]="['products']">Products</a>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
