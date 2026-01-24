const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');

// Ensure environments directory exists
const envDir = join(__dirname, '..', 'src', 'environments');
if (!existsSync(envDir)) {
  mkdirSync(envDir, { recursive: true });
}

const targetPath = join(envDir, 'environment.ts');
const targetPathProd = join(envDir, 'environment.prod.ts');

// Get the API key from the environment variables (Vercel sets this)
const apiKey = process.env.API_KEY || '';

// Content for development environment
const envFileContent = `export const environment = {
  production: false,
  apiKey: '${apiKey}'
};
`;

// Content for production environment
const envFileContentProd = `export const environment = {
  production: true,
  apiKey: '${apiKey}'
};
`;

// Write the files
writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathProd, envFileContentProd);

console.log(`Environment variables generated in ${envDir}`);
