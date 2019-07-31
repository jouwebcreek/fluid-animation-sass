import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})

export class WaveComponent implements OnInit {

  @Input('fill') fillPercent: number;
  


  @HostBinding("attr.style")
    public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle('--some-var:' + this.fillPercent + '%');
  }

  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {
  }

}
