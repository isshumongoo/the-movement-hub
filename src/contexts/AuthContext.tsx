
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  chapter: string;
  tier: 'General Member' | 'Active Volunteer' | 'Leadership Cohort';
  isLeadership: boolean;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string, chapter: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demo purposes
const mockUsers = [
  {
    id: '1',
    email: 'alex@tms.org',
    password: 'password123',
    name: 'Alex Johnson',
    chapter: 'Detroit',
    tier: 'Active Volunteer' as const,
    isLeadership: true,
    isAdmin: false,
  },
  {
    id: '2',
    email: 'admin@tms.org',
    password: 'admin123',
    name: 'Jordan Smith',
    chapter: 'DC',
    tier: 'Leadership Cohort' as const,
    isLeadership: true,
    isAdmin: true,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('tms_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('tms_user', JSON.stringify(userWithoutPassword));
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const signup = async (email: string, password: string, name: string, chapter: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      chapter,
      tier: 'General Member',
      isLeadership: false,
      isAdmin: false,
    };
    
    setUser(newUser);
    localStorage.setItem('tms_user', JSON.stringify(newUser));
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tms_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
