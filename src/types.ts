export type ViewState = 
  | 'dashboard' 
  | 'direitos' 
  | 'apoio' 
  | 'seguranca' 
  | 'ia' 
  | 'trilhas' 
  | 'quizzes' 
  | 'historias' 
  | 'perfil';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  unlockedAt?: string;
}

export interface User {
  id: string;
  name: string;
  username?: string;
  level: number;
  xp: number;
  nextLevelXp: number;
  avatarUrl?: string;
  bio?: string;
  achievements: Achievement[];
  title: string;
}

export interface Module {
  id: string;
  title: string;
  completed: boolean;
  xpReward: number;
}

export interface Trilha {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  status: 'locked' | 'in_progress' | 'completed';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  xpReward: number;
  completed: boolean;
}

