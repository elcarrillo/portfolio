const isProd = process.env.NODE_ENV === 'production';

/*
 * Gets the BASE_PATH from the command used to start this app.
 * If BASE_PATH is specified but it does not start with a "/" 
 * then add it. 
 */
function getBasePath() {
  let basePath = undefined;

  if (isProd && process.env.BASE_PATH) {
    basePath = process.env.BASE_PATH.startsWith("/")
      ? process.env.BASE_PATH
      : `/${process.env.BASE_PATH}`;
  }
  return basePath;
}

const basePath = getBasePath();

console.warn(
  `P.S. [basePath] is {${basePath}}`
);


const nextConfig = {

  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath: basePath,

  },
}

module.exports = nextConfig;
