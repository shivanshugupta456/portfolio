const path = require("path");
const { pathToFileURL } = require("url");
const puppeteer = require("puppeteer");

(async () => {
  const projectRoot = path.resolve(__dirname, "..");
  const inputPath = path.join(projectRoot, "resume-source.html");
  const outputPath = path.join(
    projectRoot,
    "public",
    "Shivanshu_Gupta_Resume.pdf",
  );

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(pathToFileURL(inputPath).toString(), {
    waitUntil: "networkidle0",
  });
  await page.emulateMediaType("print");
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`Created ${outputPath}`);
})();
