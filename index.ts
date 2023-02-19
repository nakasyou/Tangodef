import { Application } from "https://deno.land/x/oak/mod.ts";
import { serveDir } from "https://deno.land/std@0.141.0/http/file_server.ts";
import * as dejs from "https://deno.land/x/dejs@0.10.3/mod.ts";

const app = new Application();

app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/pub`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});
app.use(async(ctx, next) => {
  ctx.response.body = await Deno.readFile("./pub/404.html");
});
await app.listen({ port: 8000 });
