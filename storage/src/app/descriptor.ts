export enum DescriptorType
{
    File ="File",
    Folder = "Folder"
}
export interface FileDescriptor{
    Name: String,
    Path: String,
    Date: string,
    Type: DescriptorType
}

export interface FileTree{
    Root: string,
    Descriptors:FileDescriptor[]
}

