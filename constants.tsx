
import { Course } from './types';

export interface OnboardingQuestion {
  id: number;
  question: string;
  options: string[];
}

export const ONBOARDING_QUIZ: OnboardingQuestion[] = [
  { id: 1, question: "What's your peak focus time?", options: ["Early Morning", "Afternoon", "Late Night", "Irregular"] },
  { id: 2, question: "How do you best retain information?", options: ["Visual (Charts/Videos)", "Auditory (Lectures)", "Reading/Writing", "Hands-on (Coding/Practice)"] },
  { id: 3, question: "What is your primary academic goal?", options: ["Top Grades", "Deep Understanding", "Just Passing", "Career Preparation"] },
  { id: 4, question: "How do you handle complex topics?", options: ["Break into small pieces", "Deep dive for hours", "Watch tutorials", "Discuss with peers"] },
  { id: 5, question: "Preferred study environment?", options: ["Dead Silence", "Ambient Music", "Busy Cafe", "Study Groups"] },
  { id: 6, question: "Average focus span before a break?", options: ["25 mins (Pomodoro)", "50 mins", "2+ hours", "Varies"] },
  { id: 7, question: "Current stress level regarding exams?", options: ["Very Low", "Manageable", "High", "Extreme"] },
  { id: 8, question: "How often do you revisit old notes?", options: ["Daily", "Weekly", "Only before exams", "Never"] },
  { id: 9, question: "Preferred device for studying?", options: ["Laptop/Desktop", "Tablet/Stylus", "Physical Books", "Mobile Phone"] },
  { id: 10, question: "What motivates you most?", options: ["Deadlines", "Curiosity", "Future Career", "Peer Competition"] }
];

export const COURSES: Course[] = [
  {
    id: 'dsp',
    name: 'Digital Signal Processing (DSP)',
    description: 'Master the math behind audio, video, and communication signals.',
    topics: [
      { id: 'dsp-1', name: 'Sampling Theorem', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-2', name: 'Z-Transform', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-3', name: 'Discrete Fourier Transform (DFT)', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-4', name: 'Fast Fourier Transform (FFT)', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-5', name: 'IIR Filter Design', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-6', name: 'FIR Filter Design', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-7', name: 'Windowing Techniques', completed: false, score: 0, timeSpent: 0 },
      { id: 'dsp-8', name: 'Quantization Effects', completed: false, score: 0, timeSpent: 0 },
    ]
  },
  {
    id: 'ds',
    name: 'Data Structures',
    description: 'Learn efficient ways to store and manipulate data at scale.',
    topics: [
      { id: 'ds-1', name: 'Arrays & Strings', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-2', name: 'Linked Lists', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-3', name: 'Stacks & Queues', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-4', name: 'Trees & BST', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-5', name: 'Graphs & Traversals', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-6', name: 'Sorting Algorithms', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-7', name: 'Hashing', completed: false, score: 0, timeSpent: 0 },
      { id: 'ds-8', name: 'Heap Structure', completed: false, score: 0, timeSpent: 0 },
    ]
  }
];

export const MOCK_QUIZ: Record<string, any[]> = {
  'dsp-1': [
    { question: 'What is the minimum sampling rate required for a signal with frequency B?', options: ['B', '2B', 'B/2', '4B'], correctAnswer: 1 },
    { question: 'Aliasing occurs when...', options: ['Sampling rate is high', 'Sampling rate is below Nyquist', 'Signal is periodic', 'Quantization is coarse'], correctAnswer: 1 }
  ],
  'ds-1': [
    { question: 'What is the time complexity of accessing an element in an array?', options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], correctAnswer: 0 }
  ]
};
