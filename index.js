import fs from 'node:fs';
import fetch from 'node-fetch';

// Crate folter

const filename = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

try {
  fs.rmSync('/meme', { recursive: true });
} catch {}

fs.mkdirSync('/meme');

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const re = /<img.*\/>/gm;
const urls = body.match(re);

for (let i = 0; i < 10; i++) {}
