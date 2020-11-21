import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicle',
  templateUrl: './practicle.component.html',
  styleUrls: ['./practicle.component.css']
})
export class PracticleComponent implements OnInit {
  showSecret = false;
  log = [];


  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
