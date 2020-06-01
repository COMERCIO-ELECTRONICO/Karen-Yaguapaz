import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()//servicio

export class LoginService {
    constructor(
        private readonly _httpClient:HttpClient
    ){}

    metodoGet(url:string){
        return this._httpClient.get(url);
    }

    metodoPost(url:string, datos){
        return this._httpClient.post(url,datos)
    }

    metodoPut(url:string, DatosAEditar){
        return this._httpClient.post(url,DatosAEditar)
    }
    metodoDelete(url:string){
        return this._httpClient.delete(url)
    }
}