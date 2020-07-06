import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ScoreDialogComponent } from '../score-dialog/score-dialog.component';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  questions;
  quizId;

  step = 0;

  constructor(private apiSvc: ApiService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.apiSvc.getQuestions(this.quizId).subscribe(result => {
      this.questions = result;
      this.questions.forEach(q => {
        q.answers = [q.correctAnswer, q.wrongAnswer1, q.wrongAnswer2, q.wrongAnswer3];
        this.shuffleArray(q.answers);
      });

    });
  }

  finish() {
    let correctAnswer = 0;
    this.questions.forEach(q => {
      if (q.correctAnswer === q.selectedAnswer) {
        correctAnswer++;
      }
    });

      const dialogRef = this.dialog.open(ScoreDialogComponent, {
        data: { correctAnswer, totalQuestions: this.questions.length}
      });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
