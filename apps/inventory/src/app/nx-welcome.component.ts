import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersComponent} from "@test-ang-monorepo/orders";

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, OrdersComponent],
  template: `
        <lib-orders></lib-orders>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
