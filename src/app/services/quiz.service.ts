import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
   return this._http.get(`${baseUrl}/quiz/`);
  }

  //Add Quiz
  public addQuiz(quiz:any){
   return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //deleteQuiz
  public deleteQuiz(qId){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //get the single quiz
  public getQuiz(qId){
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  //Update Quiz
  public updateQuiz(quiz){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

  //get quizzes of categories
  public getQuizzesOfCategories(cid){
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get Active quizzes of categories
  public getActiveQuizzesOfCategory(cid){
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

}
