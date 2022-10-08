export const uniteRoutes = (...paths: Array<string | number>): string =>
  paths.reduce((acc, path) => acc + `${path}/`, '') as string;
