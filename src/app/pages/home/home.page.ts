import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  date: string;
  numJour: string;
  synchroInProgress: boolean;

  constructor() {}

  async ngOnInit() {}

  async ionViewWillEnter() {}

  ionViewWillLeave() {}
}
