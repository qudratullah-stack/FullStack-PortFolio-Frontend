export interface arrayType{
    text: string
}
export const homeArray: arrayType[]= [
      {  text: 'Full-Stack MERN Specialist'},
       { text: 'React & TypeScript Expert'},
       { text: 'End-to-End Solution Architect'},
       { text: 'Scaling Digital Experiences'},
      {  text: 'Modern UI • Clean Code '}
]
export interface problemType{
    title: string,
    solution: string
}
export interface skillType{
    name: string, percentage: number 
}
export interface GrowthDataType{
    [year: number]:{
        year: number;
        totalPercentage: number;
        count: number;
        skills: {name: string; percentage: number}[];
        highlights: string[];
    }
}
export interface Skill{
    name: string,
    percentage: number;
}
export interface  processedDataItem {
    year: number;
    average: number;
    skills: Skill[];
    highlights: string[];
}