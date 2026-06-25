import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const port = Number(process.env.PORT || 3000);
const html = readFileSync(join(process.cwd(), 'public', 'reverse-linkedin-preview.html'));

createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(port, () => {
  console.log(`Reverse LinkedIn preview running at http://localhost:${port}`);
});
