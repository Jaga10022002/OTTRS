import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    this.service.login(tvalue.subscribe(res=>{
      this.router.navigate(['/home']);
  }
  }

  ngOnInit() {
  }

}
