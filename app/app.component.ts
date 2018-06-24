import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
      <div class="container"> 
        <router-outlet></router-outlet> 
      </div>
  `,
  directives:[ROUTER_DIRECTIVES]
})
export class AppComponent { }
