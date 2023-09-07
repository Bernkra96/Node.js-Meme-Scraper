import { Agent, request } from 'node:http';
import fs from 'fs';
import https from 'https';
import fetch from 'node-fetch';

// Crate folter

const folderName = './meme';

try {
  fs.rmSync(folderName, { recursive: true });
} catch {}

fs.mkdirSync(folderName);

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const re = /<img.*\/>/gm;
let urls = body.match(re);

// console.log(typeof body);
//console.log(body);
console.log(urls);

//console.log(urls[2].slice(10, -14));
//console.log(urls[3].slice(10, -14));
//console.log(urls[4].slice(10, -14));
///console.log(urls[6].slice(10, -14));
