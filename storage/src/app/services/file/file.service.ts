import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDescriptor, FileTree, DescriptorType } from '../../descriptor';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  descriptors: FileDescriptor[] = [
    {
      name: 'File 1',
      root_path: '/documents',
      visited: new Date(),
      type: DescriptorType.File
    },
    {
      name: 'Folder 1',
      root_path: '/documents',
      visited: new Date(),
      type: DescriptorType.Folder
    },
    {
      name: 'File 2',
      root_path: '/documents/folder1',
      visited: new Date(),
      type: DescriptorType.File
    },
    {
      name: 'Folder 2',
      root_path: '/documents/folder1',
      visited: new Date(),
      type: DescriptorType.Folder
    }
  ];

  fileTree = {
    root: '/documents',
    descriptors: this.descriptors
  };


  constructor() { }
  get_root(): FileTree
  {
    return this.fileTree;
  }
}
