// services/userService.ts
const API_URL = process.env.NEXT_PUBLIC_API_BACKEND;

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/api/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
