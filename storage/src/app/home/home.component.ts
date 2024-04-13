import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file/file.service';
import { FileTree, DescriptorType, FileDescriptor} from '../descriptor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  folderlist: FileTree | null = null;

  DescriptorType = DescriptorType
  constructor(private fileService: FileService){
    
  };
  ngOnInit(): void {
     this.fileService.get_root().subscribe({
      next: data => this.folderlist = data,
      error: err => console.log(err)
     }); 
  }
  public get_obj(descriptor: FileDescriptor){
    if (descriptor.Type === DescriptorType.Folder){
      let path = descriptor.Path + "/" + descriptor.Name
      this.get_dir(path)
    }
  }

  private get_dir(file_path: string): void{
      this.fileService.get_dir(file_path).subscribe(
        {
          next: data => {this.folderlist = data, console.log(this.folderlist)},
          error: err => console.log(err)
        }
      )
  }
  
}
