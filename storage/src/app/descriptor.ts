export interface FileDescriptor {
    name: String,
    root_path: String,
    visited: Date,
}

export interface FileTree{
    folder_name: string
    files: [FileDescriptor]
}

