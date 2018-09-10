export interface IStudent {
    header: Header;
    body: Body;
  }
  
  export interface Body {
    studentData: StudentData;
  }
  
  export interface StudentData {
    students: Student[];
  }
  
  export interface Student {
    id: number;
    familyName: string;
    givenName: string;
    department: string;
    subject: string;
    mentor: Mentor;
    dob: string;
    admitDate: string;
    anticipatedGraduationDate: string;
  }
  
  interface Mentor {
    id: string;
    givenName: string;
    familyName: string;
  }
  
  interface Header {
    lastSourceDataFetchedName: string;
    lastSourceDataFetchedTime: string;
    messageLatencyStatus: string;
  }