import { Injectable } from '@angular/core';
import {picture} from '../objects/picture';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class PicturesService {

  constructor(private http: HttpClient) { }


  getPictures(){
    return this.http.get('http://localhost:3000/DB');
  }

  //upload picture info to my picturesdb
  uploadPicture(upload: picture) {
    this.http.post('http://localhost:3000/UploadPicture', upload, httpOptions)
      .subscribe();
  }

}

//My headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
