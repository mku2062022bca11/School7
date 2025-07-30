import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Update CSS custom properties
    const root = document.documentElement;
    
    const themeColors = {
      green: {
        primary: '#10b981',
        primaryHover: '#059669',
        primaryLight: '#d1fae5',
        primaryDark: '#047857'
      },
      blue: {
        primary: '#3b82f6',
        primaryHover: '#2563eb',
        primaryLight: '#dbeafe',
        primaryDark: '#1d4ed8'
      },
      purple: {
        primary: '#8b5cf6',
        primaryHover: '#7c3aed',
        primaryLight: '#ede9fe',
        primaryDark: '#6d28d9'
      },
      red: {
        primary: '#ef4444',
        primaryHover: '#dc2626',
        primaryLight: '#fee2e2',
        primaryDark: '#b91c1c'
      }
    };

    const colors = themeColors[theme];
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-primary-light', colors.primaryLight);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};