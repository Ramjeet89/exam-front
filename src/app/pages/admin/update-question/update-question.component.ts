import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
    
  public Editor = ClassicEditor;

  quesId = 0;
  quesTitle;
  question;
  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService) { }

  ngOnInit(): void {
    this.quesId =  this._route.snapshot.params.quesid;
    this.quesTitle = this._route.snapshot.params.title;
   console.log(this.quesId);
   console.log(this.quesTitle);
   
   this._question.getQuestion(this.quesId).subscribe(
     (data:any)=>{
        this.question=data;
        console.log(this.question);
     },(error)=>{
       console.log(error);
     });
  }
}


