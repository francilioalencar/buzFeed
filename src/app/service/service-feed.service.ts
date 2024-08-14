import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base } from '../model/feedz';





@Injectable({
  providedIn: 'root'
})

export class ServiceFeedService {

  dados: Base[] = [{
    title: 'string',
    questions: [],
    results : {A: "", B:""}
  }];


  constructor(

    private http : HttpClient

  ) { }





   getBase(): Observable<Base[]>{

    
      return this.http.get<Base[]>('https://my-json-server.typicode.com/francilioalencar/myJsonServer/comments');
    


  }


}
