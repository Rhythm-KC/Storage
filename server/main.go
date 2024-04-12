package main

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"time"
)

type descriptor struct{
	Name string `json:name`
	Path string `json:root_path`
	Date string `json:visited` 
	Type string `json:type`
}

type file_tree struct{
	Root string `json:root`
	Descriptors []descriptor `json:descriptors`

}

func get_folder_tree(path string) []fs.DirEntry{
	dir, err := os.Getwd()
	dir += path
	if err != nil {
		fmt.Println("Error getting current directory:", err)
		return nil
	}

	entries, err := os.ReadDir(dir)
	if err != nil {
		fmt.Println("Error reading directory contents:", err)
		return nil
	}
	return entries
}
func create_file_tree(dir_obj [] fs.DirEntry, path string) file_tree{
	var tree file_tree
	tree.Root = path;
	tree.Descriptors = []descriptor{}

	for _, entry := range dir_obj{
		var file string
		if entry.IsDir(){
			file = "Folder"
		}else{
			file = "File"
		}
		info, err := entry.Info()
		if err != nil{
			fmt.Println("Error getting info for file:", entry.Name(), err)
			continue
		}
		tree.Descriptors = append(tree.Descriptors, descriptor{entry.Name(), path, info.ModTime().Format(time.RFC1123), file})
	}
	return tree
}




func home(w http.ResponseWriter, r *http.Request ){
	path := "/Public"
	tree := get_folder_tree(path)
	file := create_file_tree(tree, path)
	json.NewEncoder(w).Encode(file)
}

func handle_request(){
	http.HandleFunc("/home", home)
}

func main(){
	handle_request();
	log.Fatal(http.ListenAndServe(":8080", nil))
}