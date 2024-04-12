import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDescriptor, FileTree, DescriptorType } from '../../descriptor';
import { HttpClient } from '@angular/common/http';

const url = "http://127.0.0.1:8080/home"
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpclient: HttpClient) { }

  get_root(): Observable<FileTree>
  {
    return this.httpclient.get<FileTree>(url)
  }
}
