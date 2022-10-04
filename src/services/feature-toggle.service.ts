import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, tap} from 'rxjs';
import {FeatureToggle} from "../models/feature-toggles.model";
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  private baseURL = 'http://localhost:8080/api/feature-toggles';

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
  }

  private log(message: String): void {
    this.messageService.addMessage(`featureToggleervice'${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getFeatureToggles(): Observable<FeatureToggle[]> {
    console.log("fetching all featureToggle")
    return this.httpClient.get<FeatureToggle[]>(this.baseURL);
  }

  getFeatureToggle(id: number): Observable<FeatureToggle> {
    return this.httpClient.get<FeatureToggle>(this.baseURL + "/" + id);
  }

  createFeatureToggle(FeatureToggle: FeatureToggle): Observable<FeatureToggle> {
    return this.httpClient.post<FeatureToggle>(this.baseURL, FeatureToggle);
  }

  updateFeatureToggle(id: number | undefined, FeatureToggle: FeatureToggle,): Observable<FeatureToggle> {
    return this.httpClient.put<FeatureToggle>(this.baseURL + "/" + id, FeatureToggle);
  }

  deleteFeatureToggle(id: number | undefined): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  getActiveFeatureToggles(): Observable<FeatureToggle[]> {
    console.log("fetching all active featureToggle")
    return this.httpClient.get<FeatureToggle[]>(this.baseURL + "/active")

  }

  findFeatureToggleByName(name: string): Observable<FeatureToggle[]> {
    console.log("fetching all featureToggle by name")
    return this.httpClient.get<FeatureToggle[]>(`${this.baseURL}?name=${name}`)

  }

  removeAllFeatureToggles(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
    console.log("delete all featureToggle")

  }

}
