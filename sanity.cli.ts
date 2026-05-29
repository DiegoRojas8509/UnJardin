import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "un-jardin",
  deployment: {
    autoUpdates: true,
    appId: "l6l0crcgw57s6xz7ouxge6e3",
  },
});
