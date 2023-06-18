import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private collapse!: Collapse;
  nombre: string = "";

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(){
    const botonHamburguesa = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const elementoObjetivo = this.elementRef.nativeElement.querySelector(botonHamburguesa.getAttribute('data-target'));

    this.collapse = new Collapse(elementoObjetivo);
  }

  toggleCollapse() {
    this.collapse.toggle();
  }

  buscarCitas() {
    this.router.navigate(['/citas', this.nombre]);
  }  
}

