import { Injectable } from "@angular/core";
import { IConfiguration} from './IConfiguration';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigurationService {
    [x: string]: any;
    private readonly apiUrl: string = 'http://localhost:4200/rest/configuration';

    constructor(private httpClient: HttpClient) {
    }

    public addConfiguration(todo:IConfiguration): Observable<null> {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, todo);
    }

    public UpdateConfiguration(Configuration :IConfiguration): Observable<null> {
        return this.httpClient.post<null>(`${this.apiUrl}/update`,Configuration);
    }

    public deleteConfiguration(id: number): Observable<object> {
        return this.httpClient.delete(`${this.apiUrl}/${id}/delete`);
    }

    public get(): Observable< IConfiguration[]> {

        return this.httpClient.get<IConfiguration[]>(`${this.apiUrl}/list`);
    }
    public GetById(id : number): Observable< IConfiguration> {

        return this.httpClient.get<IConfiguration>(`${this.apiUrl}/${id}`);
    }
}