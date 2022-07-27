import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IComputer } from "./IComputer";

@Injectable()
export class ComputerService {
    [x: string]: any;
    private readonly apiUrl: string = 'http://localhost:4200/rest/computer';

    
    handleError(error: HttpErrorResponse) {

        return throwError (JSON.stringify(error.error));
    }
    constructor(private httpClient: HttpClient) {
    }

    public addTodo(todo:  IComputer): Observable<null> {
      
        return this.httpClient.post<null>(`${this.apiUrl}/create`, todo).pipe(catchError(this.handleError));
    }

    public Update(computer:  IComputer): Observable<null> {
        console.log("id = "+computer.id);
        return this.httpClient.post<null>(`${this.apiUrl}/update`, computer);
    }

    public deleteTodo(id: number): Observable<object> {
        return this.httpClient.delete(`${this.apiUrl}/${id}/delete`);
    }

    public getTodos(): Observable< IComputer[]> {

        return this.httpClient.get< IComputer[]>("http://localhost:4200/rest/computer/list");
    }
    public getWithId(id :number): Observable< IComputer[]> {

        return this.httpClient.get< IComputer[]>(`http://localhost:4200/rest/configuration/${id}/computers`);
    }
    
}
