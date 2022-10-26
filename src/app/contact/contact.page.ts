import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private animationCtrl: AnimationController
    ) { }

  ngOnInit() {
    const animation: Animation = this.animationCtrl.create()
    .addElement(document.querySelector('.square'))
    .duration(5000)
    .fromTo('opacity', '10', '0.1');
    animation.play();
  }


  

}



