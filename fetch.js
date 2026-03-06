import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const galleries = [
    'https://postimg.cc/gallery/0ztKWsd',
    'https://postimg.cc/gallery/GTWnhHG',
    'https://postimg.cc/gallery/PhXtR84',
    'https://postimg.cc/gallery/nJQm2NC',
    'https://postimg.cc/gallery/GmzYbWK',
    'https://postimg.cc/gallery/vxhX0m4',
    'https://postimg.cc/gallery/cJCNz3Q',
    'https://postimg.cc/gallery/pd4vwBn'
  ];
  for (const g of galleries) {
    console.log(g);
    const data = await fetchPage(g);
    const matches = [...data.matchAll(/href="([^"]+)"/g)].map(m => m[1]).filter(url => url.includes('postimg.cc/') && !url.includes('gallery'));
    
    const directUrls = [];
    for (const m of matches.slice(0, 15)) { // Limit to 15 to avoid too many requests
      const pageData = await fetchPage(m);
      const directMatch = pageData.match(/href="(https:\/\/i\.postimg\.cc\/[^"]+)"/);
      if (directMatch) directUrls.push(directMatch[1]);
    }
    console.log(directUrls);
  }
}
run();
