import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private _http:HttpClient) { }

  //get questions//admin
  public getQuestionOfQuiz(qid){
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  //user
  public getQuestionOfQuizForTest(qid){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`);
  }

  //add questions
  public addQuestion(question){
    return this._http.post(`${baseUrl}/question/`, question);
  }

  //delete question
  public deleteQuestion(questionId){
    return this._http.delete(`${baseUrl}/question/${questionId}`);
  }

  //get the single quiz
    public getQuestion(quesId){
      return this._http.get(`${baseUrl}/question/${quesId}`);
    }

  //update question
  public updateQuestion(question){
      return this._http.put(`${baseUrl}/question/`,question);
  }
}
