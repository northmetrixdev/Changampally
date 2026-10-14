const http = require("http");

const routes = [
  "/",
  "/about",
  "/services",
  "/departments",
  "/doctors",
  "/blogs",
  "/blogs/nomophobia-and-the-digital-mind",
  "/centres/remedium",
  "/centres/kaivalya",
  "/centres/wellness",
  "/centres/vaidyabhavan",
  "/centres/sanjeevani",
  "/contact",
  "/sitemap.xml",
];

function checkRoute(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          path,
          statusCode: res.statusCode,
          hasLanguageToggle: data.includes("LanguageToggle") || data.includes("العربية") || data.includes("English") || data.includes("changampally"),
          size: data.length,
        });
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log("Checking all routes on http://localhost:3000 ...\n");
  let allOk = true;

  for (const route of routes) {
    try {
      const res = await checkRoute(route);
      const statusIcon = res.statusCode === 200 ? "✓" : "✗";
      console.log(`${statusIcon} ${res.statusCode} ${res.path} (${res.size} bytes)`);
      if (res.statusCode !== 200) allOk = false;
    } catch (err) {
      console.error(`✗ ERROR ${route}:`, err.message);
      allOk = false;
    }
  }

  if (allOk) {
    console.log("\n>>> ALL ROUTES RESPONDED 200 OK! <<<");
  } else {
    process.exit(1);
  }
}

run();
