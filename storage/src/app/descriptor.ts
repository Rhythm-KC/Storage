export enum DescriptorType
{
    File,
    Folder
}
export interface FileDescriptor{
    name: String,
    root_path: String,
    visited: Date,
    type: DescriptorType
}

export interface FileTree{
    root: string,
    descriptors:FileDescriptor[]
}

