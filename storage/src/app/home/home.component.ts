import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file/file.service';
import { FileTree, DescriptorType} from '../descriptor';

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
  
}
