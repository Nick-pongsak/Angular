import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // @BlockUI() blockUI!: NgBlockUI;
  title = 'test Angular';
  statusLoading = true;
  opened = true;
  loginPage = true;
  homePage = true;


  constructor ( private app: AppService )  {
    this.app.getLoading.subscribe(load => this.statusLoading = load);
    this.app.getLogin.subscribe(load => this.loginPage = load);
    // this.blockUI.start('Loading...');
  }

  ngOnInit() {
  }

  // async loading(){
  //   this.app.loading(false);
  //   await firstValueFrom(timer(3000));
  //   this.app.loading(true);
  // }
}
