import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    templateUrl: './questions.component.html',
    selector: 'questions'
})

export class QuestionsComponent {

    questions;

    constructor(private apiSvc: ApiService) {
    }

    ngOnInit(){
        this.apiSvc.getQuestion().subscribe(result => {
            this.questions = result;
        })
    }
}