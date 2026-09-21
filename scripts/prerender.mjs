import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { createServer } from "vite";

process.env.NODE_ENV = "production";

const template = await readFile("dist/index.html", "utf8");
const toc = JSON.parse(await readFile("src/toc.json", "utf8"));
const routes = [
  "/",
  ...toc.flatMap((chapter) => chapter.content.map((entry) => entry.route)),
];
const server = await createServer({
  mode: "production",
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: "custom",
});
try {
  const { render } = await server.ssrLoadModule("/src/entry-server.tsx");
  for (const route of routes) {
    const result = await render(route);
    const titles = result.html.match(/<title>[\s\S]*?<\/title>/g) ?? [];
    const html = result.html.replace(/<title>[\s\S]*?<\/title>/g, "");
    const page = template
      .replace(/<title>[\s\S]*?<\/title>/, titles[0] ?? "<title>Qubit</title>")
      .replace("</head>", `${result.styles}</head>`)
      .replace(
        '<div id="root"></div>',
        () => `<div id="root" data-prerender-route="${route}">${html}</div>`,
      );
    const directory = resolve("dist", `.${route}`);
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, "index.html"), page);
    if (route !== "/") await writeFile(`${directory}.html`, page);
  }
  console.log(`Prerendered ${routes.length} routes.`);
} finally {
  await server.close();
}
