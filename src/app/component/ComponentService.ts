import { Injectable } from "@angular/core";
import { IComponent} from './IComponent';
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ComponentService {
    [x: string]: any;
    private readonly apiUrl: string = 'http://localhost:4200/rest/components';
    handleError(error: HttpErrorResponse) {
        return throwError (JSON.stringify(error.error));
    }
    constructor(private httpClient: HttpClient) {
    }

    public addTodo(todo:IComponent): Observable<null> {
      
        return this.httpClient.post<null>(`${this.apiUrl}/create`, todo).pipe(catchError(this.handleError));
    }

    public Update(component:   IComponent): Observable<null> {
        return this.httpClient.post<null>(`${this.apiUrl}/update`, component);
    }

    public deleteTodo(id: number): Observable<object> {
        return this.httpClient.delete(`${this.apiUrl}/${id}/delete`);
    }

    public getTodos(): Observable<  IComponent[]> {

        return this.httpClient.get<  IComponent[]>("http://localhost:4200/rest/components/list");
    }
    public getWithId(id :number): Observable<  IComponent[]> {

        return this.httpClient.get<IComponent[]>(`http://localhost:4200/rest/configuration/${id}/components`);
    }

}
