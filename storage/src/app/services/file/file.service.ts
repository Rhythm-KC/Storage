import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDescriptor, FileTree, DescriptorType } from '../../descriptor';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const url = "http://127.0.0.1:8080/home"
@Injectable({
  providedIn: 'root'
})
export class FileService {
  headers = new HttpHeaders()
  

  constructor(private httpclient: HttpClient) { }

  get_root(): Observable<FileTree>
  {
    return this.httpclient.get<FileTree>(url)
  }

  get_dir(dir_path: string): Observable<FileTree>{
    let params = new HttpParams()
    params = params.append("dir", dir_path);
    return this.httpclient.get<FileTree>(url,{params})
  }

}
