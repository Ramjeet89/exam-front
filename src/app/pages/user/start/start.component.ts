import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

qid;
questions;
marksGot = 0;
correctAnswers = 0;
attempted = 0;
isSubmit = false;
  constructor(
     private locationSt:LocationStrategy,
     private _route:ActivatedRoute,
     private _question:QuestionService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this._route.snapshot.params.qid;
    console.log(this.qid);
    this.loadQuestiosn()
  }
  loadQuestiosn(){
    this._question.getQuestionOfQuizForTest(this.qid).subscribe(
      (data:any)=>{
        this.questions = data;

        this.questions.forEach((q) => {
          q['givenAnswer'] = '';
        });  

        console.log(this.questions); 
    },(error)=>{
        console.log(error);
        Swal.fire('Error','Error in loading quiz','error');
    });
  }

  preventBackButton(){
      history.pushState(null,null,location.href);
      this.locationSt.onPopState(()=>{
        history.pushState(null,null,location.href);
      });
  }

  submitQuiz(){
    Swal.fire({
      title: 'Do you want to submit the Quiz!!',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Submit`,
     // denyButtonText: `Don't save`,
      icon:'info',
    }).then((e)=>{
      if(e.isConfirmed){
        this.isSubmit = true;
          //calculate
         // console.log(this.questions);
         this.questions.forEach(q => {
           if(q.givenAnswer == q.answer){
             this.correctAnswers++;
            let marksSingle =  this.questions[0].quiz.maxMarks/this.questions.length;
            this.marksGot+=marksSingle;
           }   
           if(q.givenAnswer.trim()!=''){
              this.attempted++;
           }
         });
         console.log("Correct Answers:: "+this.correctAnswers);
         console.log("Marks Got:: "+this.marksGot);
         console.log("Attempted:: "+this.attempted);
         console.log(this.questions);
      }
    });
  }
}
