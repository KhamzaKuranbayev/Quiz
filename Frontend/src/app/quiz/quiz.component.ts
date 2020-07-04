import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Quiz } from '../quiz';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz = new Quiz();
  subscription: Subscription;

  constructor(private apiSvc: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.apiSvc.getSelectedQuiz().subscribe(q => {
      this.quiz = q;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  post() {
    if (this.quiz.id)
      this.apiSvc.putQuiz(this.quiz);
    else
      this.apiSvc.postQuiz(this.quiz);

     this.resetQuiz(); 
  }

  resetQuiz() {
    this.quiz = new Quiz();
  }

  navigateToQuestions() {
    this.router.navigate(['/question/' + this.quiz.id]);
  }

}
