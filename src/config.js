/**
 * Fig & Flour — Application Configuration
 *
 * Central access point for all environment variables and API configuration.
 * Components import from here instead of reaching into `import.meta.env`
 * directly, making the app easier to test and configure.
 *
 * Variables prefixed with `VITE_` are exposed to the client by Vite.
 * Sensible defaults keep the app running in demo/mock mode without a .env file.
 */

const env = import.meta.env;

const config = {
  /** Base URL of the reservation API backend */
  apiBaseUrl: env.VITE_API_BASE_URL || "",

  /** API key for authenticated requests */
  apiKey: env.VITE_API_KEY || "",

  /** Reservation endpoint path */
  reservationsEndpoint:
    env.VITE_RESERVATIONS_ENDPOINT || "/api/reservations",

  /** Run in demo mode — use local mock data, don't hit a real API */
  demoMode: env.VITE_DEMO_MODE !== "false", // default true
};

export default config;
