export interface FileItem {
    label: string;
    id: string;
    parentId?: string; // parentId property, which is optional for children
    children?: FileItem[];
}