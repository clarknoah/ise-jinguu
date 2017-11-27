import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'param-routing',
  templateUrl: './param-routing.component.html',
  styleUrls: ['./param-routing.component.css']
})
export class ParamRoutingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  goToPath(id: string):void {
    this.router.navigate(['./',id], {relativeTo: this.route})
  }

  ngOnInit() {
  }

}
