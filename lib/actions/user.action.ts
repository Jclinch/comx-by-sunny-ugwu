import { signUp as signUpApi, login as loginApi } from "@/lib/api";

interface UserData {
  email: string;
  password: string;
}

export const signUp = async (userData: UserData) => {
  try {
    const result = await signUpApi(userData);
    if (result.status === "success") {
      return result.user;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const login = async (userData: UserData) => {
  try {
    const result = await loginApi(userData);
    if (result.status === "success") {
      return result.user;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};

