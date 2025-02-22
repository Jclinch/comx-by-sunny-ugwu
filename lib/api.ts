// import axios from "axios";

// interface UserData {
//   email: string;
//   password: string;
// }

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface ApiResponse {
//   status: string;
//   message?: string;
//   user?: User;
// }

// const API_SIGNUP_URL = "https://run.mocky.io/v3/0a610d81-8c85-4b08-80ea-c7b2d309a399";
// const API_LOGIN_URL =  "https://run.mocky.io/v3/010279ba-f352-44ed-b0dd-0312f91b9907";

// export const signUp = async (userData: UserData): Promise<ApiResponse> => {
//   try {
//     const response = await axios.post<ApiResponse>(
//       `${API_SIGNUP_URL}/sign-up`,
//       userData
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error during sign-up:", error);
//     return { status: "error", message: "Sign-up failed" };
//   }
// };

// export const login = async (userData: UserData): Promise<ApiResponse> => {
//   try {
//     const response = await axios.post<ApiResponse>(
//       `${API_LOGIN_URL}/login`,
//       userData
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error during login:", error);
//     return { status: "error", message: "Login failed" };
//   }
// };
