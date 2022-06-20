import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItemModel } from '../../models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() nomeRotaEvent = new EventEmitter<string>();

  menus: MenuItemModel[] = [
    {
      name: 'Docentes',
      path: '/docentes',
      icon: 'school'
    },
    {
      name: 'Discentes',
      path: '/discentes',
      icon: 'person'
    },
    {
      name: 'Bioterio',
      path: '/bioterio',
      icon: 'pets'
    },
    {
      name: 'Animais',
      path: '/animais',
      icon: 'cruelty_free'
    }
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  mudanomeRota(nomeRota:string){
    this.nomeRotaEvent.emit(nomeRota);
  }
}
