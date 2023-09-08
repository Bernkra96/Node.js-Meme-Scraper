import fs from 'fs';
import fetch from 'node-fetch';
import saveImage from 'smart-image-saver';

// Crate folter

const folderName = 'meme';
var filename = 'image01';

try {
  fs.rmSync('/meme', { recursive: true });
} catch {}

fs.mkdirSync('/meme');

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const re = /<img.*\/>/gm;
let urls = body.match(re);

// console.log(typeof body);
//console.log(body);
//console.log(urls);

//console.log(urls[2].slice(10, -14));
//console.log(urls[3].slice(10, -14));
//console.log(urls[4].slice(10, -14));
///console.log(urls[6].slice(10, -14));

await saveImage({
  url: urls[0].slice(10, -14),
  path: 'meme/image.jpg',
  name: 'example',
});
