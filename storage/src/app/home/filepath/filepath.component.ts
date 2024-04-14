import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FileTree } from '../../descriptor';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'app-filepath',
  templateUrl: './filepath.component.html',
  styleUrl: './filepath.component.css'
})
export class FilepathComponent implements OnInit, OnChanges{
  @Input()
  filepath: FileTree | null = null
  root_path: string = "Home"
  path_list: string[] = [this.root_path]

  @Output()
  dirEventEmitter = new EventEmitter()


  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void{
    this.path_list = [this.root_path]
    if (this.filepath != null){
      let tree = this.filepath.Root.split("/")
      if (tree.length > 2)
      {
        this.path_list = this.path_list.concat(tree.slice(2))
      }
    }
  }

  changeDir(index: number){
    let path = this.filepath?.Root
    let path_to_get = "";
    if (path?.startsWith("/"))
    {
      path_to_get = "/"
      path = path.slice(1);
    }
    path_to_get = path_to_get + path?.split("/").slice(0, index + 1).join("/")
    this.dirEventEmitter.emit(path_to_get)
  }
  
}
