import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter(),
    experimental: {
      explicitEnvironmentVariables: true,
    },
  },
};

export default config;
