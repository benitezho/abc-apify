export default (): Record<string, unknown> => ({
  appURL: process.env.APP_BASE_URL,
  appDocs: process.env.APP_DOCS_URI,
});
