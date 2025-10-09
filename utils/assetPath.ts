/**
 * Get the correct asset path accounting for Next.js basePath in production
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/DemoEcoOmni' : '';
  return `${basePath}${path}`;
};

