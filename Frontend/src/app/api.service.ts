import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}
   
    postQuestion(question) {
        this.http.post('https://localhost:44382/api/question', question)
        .subscribe(response => {
            console.log(response);
        })
    }

}