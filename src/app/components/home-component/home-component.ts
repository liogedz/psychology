import {Component, signal} from '@angular/core';
import {CarouselComponent} from '@components/carousel-component/carousel-component';
import {NgClass} from '@angular/common';
import {TEXTS} from '@common/texts';

@Component({
  selector: 'app-home-component',
  imports: [
    CarouselComponent,
    NgClass
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  firstCarousel: string[] = [TEXTS.text1, TEXTS.text2, TEXTS.text3, TEXTS.text4, TEXTS.text5];
  secondCarousel: string[] = [TEXTS.text6, TEXTS.text7, TEXTS.text8, TEXTS.text9, TEXTS.text10];

  showCards1 = signal(false)
  showCards2 = signal(false)

  protected openCards1() {
    this.showCards1() ? this.showCards1.set(false) : this.showCards1.set(true)
  }

  protected openCards2() {
    this.showCards2() ? this.showCards2.set(false) : this.showCards2.set(true)
  }
}
