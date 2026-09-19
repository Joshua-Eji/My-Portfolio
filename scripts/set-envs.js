const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');

// Ensure environments directory exists
const envDir = join(__dirname, '..', 'src', 'environments');
if (!existsSync(envDir)) {
  mkdirSync(envDir, { recursive: true });
}

const targetPath = join(envDir, 'environment.ts');
const targetPathProd = join(envDir, 'environment.prod.ts');

// No secrets belong in these files. Anything written here is compiled into the
// browser bundle and is readable by anyone who opens devtools. The Gemini key
// lives only in the serverless function at api/chat.mjs, which reads it from
// process.env at request time and never sends it to the client.

const envFileContent = `export const environment = {
  production: false
};
`;

const envFileContentProd = `export const environment = {
  production: true
};
`;

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathProd, envFileContentProd);

console.log(`Environment files generated in ${envDir}`);
