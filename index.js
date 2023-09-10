import fs from 'node:fs';
import https from 'node:https';
import fetch from 'node-fetch';

const filename = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

// Crate folter

try {
  if (!fs.existsSync('./meme')) {
    fs.mkdirSync('./meme');
  }
} catch {}
// Fetch Links
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await response.text();
const re = /<img.*\/>/gm;
const urls = body.match(re);

// Downloaded Image from URl
for (let i = 0; i < 10; i++) {
  https
    .get(urls[i].slice(10, -15), (res) => {
      const imagePath = './meme/' + filename[i] + '.jpg';
      const stream = fs.createWriteStream(imagePath);

      res.pipe(stream);

      stream.on('finish', () => {
        stream.close();
        console.log(urls[i].slice(10, -15));

        console.log('Image downloaded ');
      });
    })
    .on('error', (err) => {
      // handle error
      console.log(err);
    });
}
