
export enum UserRole {
  STUDENT = 'STUDENT',
  FACULTY = 'FACULTY'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  courseId?: string;
}

export interface Topic {
  id: string;
  name: string;
  completed: boolean;
  score: number; // 0-100
  timeSpent: number; // minutes
}

export interface Course {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
}

export interface StudyPlanItem {
  date: string;
  topicIds: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  sources?: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}
