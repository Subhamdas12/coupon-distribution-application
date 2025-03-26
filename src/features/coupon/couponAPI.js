import config from "../../config/config";
import { Bounce, toast } from "react-toastify";
export async function createCoupon(couponData) {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/createCoupon`;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(couponData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }
    toast.success("Coupon added successfully", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { data };
  } catch (error) {
    console.error("Failed to create coupon:", error);
    return { error: error.message };
  }
}

export async function getAllCoupons() {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/getAllCoupons`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return { data };
  } catch (error) {
    console.error("Failed to fetch coupons:", error);
    return { error: error.message };
  }
}

export async function editCoupon(updatedData) {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/editCoupon/${updatedData.id}`;

    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    toast.success("Coupon updated successfully", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { data };
  } catch (error) {
    console.error("Failed to edit coupon:", error);
    toast.error(error.message || "Failed to update coupon", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { error: error.message };
  }
}

export async function deleteCoupon(couponId) {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/deleteCoupon/${couponId}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    toast.success("Coupon deleted successfully", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { data };
  } catch (error) {
    console.error("Failed to delete coupon:", error);
    toast.error(error.message || "Failed to delete coupon", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { error: error.message };
  }
}

export async function getAvailableCouponsWRTUser() {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/getAvailableCouponsWRTUser`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensure cookies (sessionId) are sent
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return { data };
  } catch (error) {
    console.error("Failed to fetch available coupons:", error);
    toast.error(error.message || "Failed to fetch available coupons", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { error: error.message };
  }
}

export async function requestCoupon(couponId) {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/requestCoupon/${couponId}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensure cookies (sessionId) are sent
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    toast.success("Coupon requested successfully", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { data };
  } catch (error) {
    console.error("Failed to request coupon:", error);
    toast.error(error.message || "Failed to request coupon", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { error: error.message };
  }
}

export async function getAllCouponClaims() {
  try {
    const url = `${config.VITE_BACKEND_URL}/api/coupons/getAllCouponClaims`;

    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensures cookies (sessionId) are sent
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || response.statusText);
    }

    return { data };
  } catch (error) {
    console.error("Failed to fetch coupon claims:", error);
    toast.error(error.message || "Failed to fetch coupon claims", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    return { error: error.message };
  }
}
