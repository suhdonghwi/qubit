import { renderToPipeableStream, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { RouteContent } from "./routes";

/** Resolve lazy routes first, then emit complete HTML without streaming placeholders. */
export function render(
  path: string,
): Promise<{ html: string; styles: string }> {
  return new Promise((resolve, reject) => {
    const app = (
      <div className="App">
        <StaticRouter location={path}>
          <RouteContent />
        </StaticRouter>
      </div>
    );
    const stream = renderToPipeableStream(app, {
      onAllReady() {
        const sheet = new ServerStyleSheet();
        try {
          const html = renderToString(sheet.collectStyles(app));
          if (html.includes("<!--$!-->"))
            throw new Error(`Unresolved prerender boundary: ${path}`);
          resolve({ html, styles: sheet.getStyleTags() });
        } catch (error) {
          reject(error);
        } finally {
          sheet.seal();
          stream.abort();
        }
      },
      onError: reject,
    });
  });
}
