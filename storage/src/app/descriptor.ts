export enum DescriptorType
{
    File ="File",
    Folder = "Folder"
}
export interface FileDescriptor{
    Name: string,
    Path: string,
    Date: string,
    Type: DescriptorType
}

export interface FileTree{
    Root: string,
    Descriptors:FileDescriptor[]
}

