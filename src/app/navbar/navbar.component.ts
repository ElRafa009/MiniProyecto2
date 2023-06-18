import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse } from 'bootstrap';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private collapse!: Collapse;
  nombre: string = "";
  isAdmin$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  userEmail$: Observable<string | null>;

  constructor(private router: Router, private elementRef: ElementRef, private authService: AuthService) {
    this.isAdmin$ = this.authService.isAdmin();
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.userEmail$ = this.authService.getUserEmail();
  }

  ngOnInit() {
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

  logout() {
    this.authService.logout();
  }
}