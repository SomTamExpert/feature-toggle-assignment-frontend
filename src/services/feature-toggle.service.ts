import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeatureToggle} from "../models/feature-toggles.model";
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  private baseURL = 'http://localhost:8080/api/feature-toggles';

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
  }

  /**
   * Get all featureToggles from the server
   * @returns {Observable<FeatureToggle[]>}
   */
  getFeatureToggles(): Observable<FeatureToggle[]> {
    console.log("fetching all featureToggle")
    return this.httpClient.get<FeatureToggle[]>(this.baseURL);
  }

  /**
   * get featureToggle by id
   * @param id
   * @returns {Observable<FeatureToggle>}
   */
  getFeatureToggle(id: number): Observable<FeatureToggle> {
    return this.httpClient.get<FeatureToggle>(this.baseURL + "/" + id);
  }

  /**
   * create a new featureToggle
   * @param FeatureToggle
   * @returns {Observable<FeatureToggle>}
   */
  createFeatureToggle(FeatureToggle: FeatureToggle): Observable<FeatureToggle> {
    return this.httpClient.post<FeatureToggle>(this.baseURL, FeatureToggle);
  }

  /**
   * update featureToggle
   * @param id
   * @param FeatureToggle
   * @returns {Observable<FeatureToggle>}
   */
  updateFeatureToggle(id: number | undefined, FeatureToggle: FeatureToggle,): Observable<FeatureToggle> {
    return this.httpClient.put<FeatureToggle>(this.baseURL + "/" + id, FeatureToggle);
  }

  /**
   * delete featureToggle by id
   * @param id
   * @returns {Observable<any>}
   */
  deleteFeatureToggle(id: number | undefined): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id);
  }

  /**
   * get all active featureToggles
   * @returns {Observable<FeatureToggle[]>}
   */
  getActiveFeatureToggles(): Observable<FeatureToggle[]> {
    console.log("fetching all active featureToggle")
    return this.httpClient.get<FeatureToggle[]>(this.baseURL + "/active")

  }

  /**
   * search featureToggle by name
   * @param name
   * @returns {Observable<FeatureToggle[]>}
   */
  findFeatureToggleByName(name: string): Observable<FeatureToggle[]> {
    console.log("fetching all featureToggle by name")
    return this.httpClient.get<FeatureToggle[]>(`${this.baseURL}?name=${name}`)

  }

  /**
   * remove all featureToggles
   * @returns {Observable<any>}
   */
  removeAllFeatureToggles(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
    console.log("delete all featureToggle")

  }

}
