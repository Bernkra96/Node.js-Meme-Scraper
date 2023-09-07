import { Agent, request } from 'node:http';
import fs from 'fs';
import https from 'https';
import fetch from 'node-fetch';

// Crate folter

//const folderName = './meme';

//fs.mkdirSync(folderName);

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text(url);

console.log(body);
