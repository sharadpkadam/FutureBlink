import { randomBytes } from 'crypto';

const generateApiKey = () => {
  return randomBytes(32).toString('hex');
};

const apiKey = generateApiKey();
console.log("Generated API Key:", apiKey);
