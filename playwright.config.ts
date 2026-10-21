import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  timeout: 30000,
  reporter: "list",
  use: { baseURL: "http://127.0.0.1:3000", channel: "msedge", headless: true, trace: "retain-on-failure" },
  webServer: { command: "npm run dev", url: "http://127.0.0.1:3000", reuseExistingServer: true, timeout: 60000 },
});
