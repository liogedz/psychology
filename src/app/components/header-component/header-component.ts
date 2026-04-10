import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import {NavbarService} from '@services/navbar-service';

@Component({
  selector: 'app-header-component',
  imports: [
    RouterLink
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
  standalone: true
})
export class HeaderComponent {


  constructor(
    public navbar: NavbarService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navbar.closeAll();
      });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (
      !target.closest('.mobile-menu') &&
      !target.closest('.menu-button')
    ) {
      this.navbar.isMobileMenuOpen.set(false);
    }

    if (!target.closest('.services-menu')) {
      this.navbar.isServicesOpen.set(false);
    }
  }
}
