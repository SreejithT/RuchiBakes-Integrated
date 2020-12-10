import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseURL: string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }


  // homemainimg(): Observable<any> {
  //   console.log('homemainimg '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')
  // }

  // homesecimg():Observable<any>{
  //   console.log('homesecimg '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')
  // }

  // homeftrprd():Observable<any>{
  //   console.log('homeftrprd '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')
  // }

  // homercp():Observable<any>{
  //   console.log('homercp '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')
  // }

  // homeabtus():Observable<any>{
  //   console.log('homeabtus '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')
  // }

  // homesubdata(Subdata:any): Observable<any> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(Subdata);
  //   console.log(body)
  //   return this.http.post(this.baseURL + '<API_endpoint>', body,{'headers':headers})
  // }

  // blogdata():Observable<any>{
  //      console.log('blogdata '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')

  // }

  //  blogdetailsdata():Observable<any>{
  //      console.log('blogdetailsdata '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')

  // }

  //    blogdetailsrcnpost():Observable<any>{
  //      console.log('blogdetailsrcnpost '+this.baseURL + '<API_endpoint>')
  //   return this.http.get<any>(this.baseURL + '<API_endpoint>')

  // }

  
}


