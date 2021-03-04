import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'animator';
  something: any;
  goodContainer: any;
  badContainer: any;

  ngAfterViewInit(): void {

    const textWrapper = document.querySelector('.e');
    this.something = null;
    this.goodContainer = [];
    this.badContainer = [];



  }
  createGoodNode(): void{
    for (let i =0; i < 10; i ++){
    const newDiv = document.createElement('div');
    const selector = 'g';
    newDiv.className = 'g';
    const rootDiv = document.getElementById('rooter');
    rootDiv?.appendChild(newDiv);
    this.addGoodAnimation(selector);
    this.goodContainer.push(this.goodContainer.length);
    }
  }

  addGoodAnimation(selector: string): void {
    this.something = anime({
      targets: `.g`,
      translateY: -150,
      translateX: -100,
      delay: anime.stagger(100, {start: 10}),
      loop: false,
      backgroundColor: 'black'
     });
  }
  createBadNode(): void{
    for (let i = 0; i < 10; i++ ){
    const newDiv = document.createElement('div');
    const selector = 'b';
    newDiv.className = 'b';
    const rootDiv = document.getElementById('rooter');
    rootDiv?.appendChild(newDiv);
    this.addBadAnimation(selector);
    this.badContainer.push(this.badContainer.length);
    }
  }
  addBadAnimation(selector: string): void {
    this.something = anime({
      targets: `.b`,
      translateY: -150,
      translateX: 100,
      delay: anime.stagger(100, {start: 10}),
      loop: false,
      backgroundColor: 'black'
     });
  }


}
