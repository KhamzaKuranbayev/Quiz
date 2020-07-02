import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    templateUrl: './question.component.html',
    selector: 'question'
})

export class QuestionComponent {

    question = {
        text: 'USA poytaxti',
        correctAnswer: 'Washington',
        wrongAnswers: ['Los Angeles', 'New York', 'Chicago']
    };

    constructor(private apiSvc: ApiService) {
    }

    post() {
        this.apiSvc.postQuestion(this.question);
    }

}