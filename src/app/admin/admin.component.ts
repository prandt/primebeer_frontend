import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toGerenciarTipoCerveja(){
   this.router.navigate(['admin/tipocerveja'])
  }
  toGerenciarVolume(){
    this.router.navigate(['admin/volume'])
  }

}
