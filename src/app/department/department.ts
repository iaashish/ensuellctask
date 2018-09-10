export interface IDepartment {
    university: string;
    lastUpdatedTime: string;
    departments: Department[];
  }
  
export interface Department {
    name: string;
    subjects: string[];
  }