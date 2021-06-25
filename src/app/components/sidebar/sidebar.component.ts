import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'app/model/usuario.model';
import { UsuarioService } from 'app/service/usuario.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/cervejas', title: 'Cervejas', icon: 'store', class: ''},
    { path: '/primebeerbox', title: 'PrimeBeerBox', icon: 'inventory_2', class: '' },
    { path: '/login', title: 'Faça login com sua conta', icon: 'login', class: '' },/*
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  isCollapsed: boolean
  hasHoleAdmin: boolean
  usuario: UsuarioModel = new UsuarioModel()
  isLogged: boolean

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
 getRuleAdmin(){
   return localStorage.getItem('isAdmin')
  }
  isAdmin(): boolean{
    if( this.getRuleAdmin() == "yes"){
      return true
    }
    else {
      false
    }
  }
 
}
