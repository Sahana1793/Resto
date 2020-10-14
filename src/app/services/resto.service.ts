import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import{List} from '../Models/List';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

 
  constructor(private http:HttpClient) { }

  url = 'http://localhost:3000/restaurants';
  rootUrl="http://localhost:3000/";

  getList(): Observable<HttpResponse<List[]>>{
  return  this.http.get<List[]>(this.url,{observe: 'response'});

  }
  // saveResto(data: List): Observable<HttpEvent<List>>{
  //   // let headers = new HttpHeaders({
  //   //   'Content-type': 'applictaion/json'
  //   // });
  //   return this.http.post<List>(this.url, data,
    // {
    //     headers: headers,
    //     observe: 'events',
    //     reportProgress: true});
    //   }

  // tslint:disable-next-line: typedef
  saveRestro(data)
  {
    return this.http.post(this.url,data);
  }

// tslint:disable-next-line: typedef
deleteResto(id)
 {
     return this.http.delete(this.url+'/'+id);
}
// tslint:disable-next-line: typedef
getResto(id)
{
  return this.http.get(this.url+'/'+id);
}
// tslint:disable-next-line: typedef
updateResto(id,data)
{
  return this.http.put(this.url+'/'+id,data);

}
registerUsr(data)
{
  return this.http.post(this.rootUrl+"users",data);
}

}


