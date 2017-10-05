import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { DataService } from '../shared/data.service';
import { Speaker } from '../shared/model';

@Component({
  selector: 'conf-speakerdetail',
  templateUrl: './speakerdetail.component.html'
})
export class SpeakerDetailComponent implements OnInit {
  speaker: Speaker;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.dataService.getSpeaker(+params.get('id')))
    .subscribe(speaker => this.speaker= speaker);
  }

  goBack() {
    this.location.back();
  }

}