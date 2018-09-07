class Departments{
    name: string;
    [subjects: string]: any;
}

export interface IDepartment {
    university: string;
    lastUpdatedTime: string;
    departments: Departments[]
}