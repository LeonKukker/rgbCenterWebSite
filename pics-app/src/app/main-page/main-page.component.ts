import { Component, OnInit } from '@angular/core';
import { trigger,state, transition,style,animate } from '@angular/animations';
import {PicturesService} from "../services/pictures.service";
import {picture} from "../objects/picture";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [ ]
})
export class MainPageComponent implements OnInit {
  picturesArray:any;
  constructor(private picturesService:PicturesService) { }
  postObj = {name: 'IMG_1',category: 'nature',description: 'pic trial',path: 'supimapath',owner: 'leonOFC'};

  ngOnInit() {

  }

  click(){
    this.picturesService.uploadPicture(this.postObj);
  }

}
