import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {
  user: string
  playBillBoard: boolean

  constructor() {}

  ngOnInit() {
    this.user = '사용자'
    this.playBillBoard = false
  }
}
