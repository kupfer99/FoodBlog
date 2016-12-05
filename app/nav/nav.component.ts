import { Component } from '@angular/core';
import { Link } from './link';
import { LINKS} from './mockLinks';

@Component({
  selector: 'navigation',
  templateUrl: 'app/nav/link.component.html',
  })
export class NavComponent {
    links: Link[]
    ngOnInit() {
      this.links = LINKS;
     
    }
  }
