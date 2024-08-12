import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AccessService } from '../../core/services/access.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'toy-template',
  templateUrl: './template.component.html',
})
export class GsTemplateComponent implements OnInit {
  constructor(
    private accessService: AccessService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  isPainel = false;
  isAuth = true;
  fazerLogin = true;
  ngOnInit(): void {
    this.isPainel = this.route.snapshot.data['isPainel'];

    this.accessService.check().subscribe(authenticated => {
      this.isAuth = authenticated;
    });

    // this.isAuth = this.route.snapshot.data['isAuth'];
  }

  // loginTeste = () => {
  //   console.log(this.fazerLogin)
  // };

}
