import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header-component',
  imports: [
    RouterLink
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isServicesOpen = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleServices() {
    this.isServicesOpen = !this.isServicesOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isServicesOpen = false;
  }
}
