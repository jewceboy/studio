import { execSync } from 'child_process';

console.log('Running npm install to regenerate package-lock.json...');
execSync('npm install', { cwd: '/vercel/share/v0-project', stdio: 'inherit' });
console.log('Done! Lock file regenerated.');
