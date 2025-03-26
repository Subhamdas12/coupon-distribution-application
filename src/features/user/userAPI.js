import config from "../../config/config";
import { Bounce, toast } from "react-toastify";

export async function getUserByIpOrSession() {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/user/getUserByIpOrSession`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensures session cookies are sent
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return { data };
  } catch (error) {
    console.error("Failed to fetch user:", error);

    return { error: error.message };
  }
}

export async function getAllUsers() {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/user/getAllUsers`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensures session cookies are sent
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return { data };
  } catch (error) {
    console.error("Failed to fetch users:", error);

    return { error: error.message };
  }
}
