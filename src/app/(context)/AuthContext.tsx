import React, { createContext, useState, useEffect } from 'react';

interface User {
  // Replace with your actual user data structure (including ID)
  id: string; // Assuming user ID is a string
  // Add other relevant user properties (e.g., name, email)
}

export const AuthContext = createContext<User | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        if (response.ok) {
          setUser(data as User); // Cast data to type User
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUser();
  }, []);

  // ... existing login and logout functions (if applicable)

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
