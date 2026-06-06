// Placeholder client for API requests
export const base44Client = {
  get: async (url) => {
    console.log(`Fetching from ${url}`);
    return null;
  },
  post: async (url, data) => {
    console.log(`Posting to ${url}`, data);
    return null;
  }
};
