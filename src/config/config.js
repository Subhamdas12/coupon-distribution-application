let backendUrl;

if (import.meta.env.VITE_STATUS === "development") {
  backendUrl = import.meta.env.VITE_BACKEND_DEVELOPMENT_LINK;
} else if (import.meta.env.VITE_STATUS === "production") {
  backendUrl = import.meta.env.VITE_BACKEND_PRODUCTION_LINK;
} else {
  backendUrl = import.meta.env.VITE_BACKEND_DEVELOPMENT_LINK;
}

const config = {
  VITE_BACKEND_URL: backendUrl,
};

export default config;
