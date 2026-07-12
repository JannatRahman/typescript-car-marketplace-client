"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

import {
  User,
  LoginData,
  RegisterData,
} from "@/types/auth";

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "@/services/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;

  login: (data: LoginData) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getCurrentUser();

      if (res.success && res.data) {
        setUser(res.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const register = async (
    data: RegisterData
  ): Promise<boolean> => {
    try {
      const res = await registerUser(data);

      if (!res.success) {
        return false;
      }

      await refreshUser();

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const login = async (
    data: LoginData
  ): Promise<boolean> => {
    try {
      const res = await loginUser(data);

      if (!res.success) {
        return false;
      }

      await refreshUser();

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    } finally {
      setUser(null);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      await refreshUser();
    };

    initializeAuth();
  }, [refreshUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside AuthProvider."
    );
  }

  return context;
};