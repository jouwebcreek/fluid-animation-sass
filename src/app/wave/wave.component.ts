import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})
export class WaveComponent implements OnInit {

  @Input('fill') fillPercent: number;
  animationStyle = { };


  constructor() { }

  ngOnInit() {
  }

  setPercentage() {
    let percentage = this.fillPercent;
    this.animationStyle = { 'animation': 'wave' + percentage + ' 3s ease 1 normal forwards' }
    return this.animationStyle;
  }

}
