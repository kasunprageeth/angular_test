import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZVaultService {

  constructor(private http: HttpClient) { }

  // Function to get document list from JSON file
  getDocumentList(): Observable<any> {
    // Return an observable of HTTP GET request to the JSON file
    return this.http.get("./assets/data/document-list.json");
  }

  // BehaviorSubject to store and broadcast file data
  private fileDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // Observable to subscribe to file data changes
  public payload$: Observable<any> = this.fileDataSubject.asObservable();

  // Function to set file data
  setFileData(data: any) {
    // Emit new data to subscribers
    this.fileDataSubject.next(data);
  }

  // BehaviorSubject to store and broadcast remove file data
  private removeFileSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // Observable to subscribe to remove file data changes
  public removeFile$: Observable<any> = this.removeFileSubject.asObservable();

  // Function to get remove file data
  removeFile(fileDetails: any) {
    // Emit remove file data to subscribers
    this.removeFileSubject.next(fileDetails);
  }
}
