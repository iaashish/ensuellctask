class Mentor{
    id: string;
    givenName: string;
    familyName: string;
}

export interface IStudent{
    id: number,
    familyName: string,
    givenName: string,
    department: string,
    subject: string,
    mentor: Mentor,
    dob: string,
    admitDate: string,
    anticipatedGraduationDate: string
}