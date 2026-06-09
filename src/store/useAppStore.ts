import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Trilha, Quiz, Achievement } from '../types';
import { initialUser, initialTrilhas, initialQuizzes } from '../data/mockData';

interface AppStore {
  user: User;
  trilhas: Trilha[];
  quizzes: Quiz[];
  addXp: (amount: number) => void;
  completeModule: (trilhaId: string, moduleId: string) => void;
  completeQuiz: (quizId: string) => void;
  unlockAchievement: (achievement: Achievement) => void;
  updateProfile: (data: Partial<User>) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      user: initialUser,
      trilhas: initialTrilhas,
      quizzes: initialQuizzes,

      updateProfile: (data) => set((state) => ({
        user: { ...state.user, ...data }
      })),
      
      addXp: (amount) => set((state) => {
    let newXp = state.user.xp + amount;
    let newLevel = state.user.level;
    let nextLevelXp = state.user.nextLevelXp;
    
    // Simple leveling up logic
    if (newXp >= nextLevelXp) {
      newLevel += 1;
      nextLevelXp = Math.floor(nextLevelXp * 1.5); // scale next level
    }
    
    return {
      user: {
        ...state.user,
        xp: newXp,
        level: newLevel,
        nextLevelXp,
      }
    };
  }),

  completeModule: (trilhaId, moduleId) => set((state) => {
    let xpReward = 0;
    const newTrilhas = state.trilhas.map(trilha => {
      if (trilha.id === trilhaId) {
        return {
          ...trilha,
          modules: trilha.modules.map(mod => {
            if (mod.id === moduleId && !mod.completed) {
              xpReward = mod.xpReward;
              return { ...mod, completed: true };
            }
            return mod;
          })
        };
      }
      return trilha;
    });

    // We also want to add XP here
    let newXp = state.user.xp + xpReward;
    let newLevel = state.user.level;
    let nextLevelXp = state.user.nextLevelXp;
    
    if (newXp >= nextLevelXp) {
      newLevel += 1;
      nextLevelXp = Math.floor(nextLevelXp * 1.5);
    }

    return { 
      trilhas: newTrilhas,
      user: {
        ...state.user,
        xp: newXp,
        level: newLevel,
        nextLevelXp,
      }
    };
  }),

  completeQuiz: (quizId) => set((state) => {
    let xpReward = 0;
    const newQuizzes = state.quizzes.map(quiz => {
      if (quiz.id === quizId && !quiz.completed) {
        xpReward = quiz.xpReward;
        return { ...quiz, completed: true };
      }
      return quiz;
    });

    let newXp = state.user.xp + xpReward;
    let newLevel = state.user.level;
    let nextLevelXp = state.user.nextLevelXp;
    
    if (newXp >= nextLevelXp) {
      newLevel += 1;
      nextLevelXp = Math.floor(nextLevelXp * 1.5);
    }
    
    return {
      quizzes: newQuizzes,
      user: {
        ...state.user,
        xp: newXp,
        level: newLevel,
        nextLevelXp,
      }
    };
  }),

  unlockAchievement: (achievement) => set((state) => {
    // check if already unlocked
    if (state.user.achievements.find(a => a.id === achievement.id)) return state;
    
    return {
      user: {
        ...state.user,
        achievements: [...state.user.achievements, { ...achievement, unlockedAt: new Date().toISOString() }]
      }
    };
  }),
    }),
    {
      name: 'chico-store',
    }
  )
);
