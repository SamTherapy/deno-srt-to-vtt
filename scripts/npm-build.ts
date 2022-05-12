// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "srt-to-vtt",
    version: Deno.args[0],
    description: "A library that converts SRT files to VTT equivalents so they can be broadcast on the Internet.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://git.froth.zone/sam/srt-to-vtt",
    },
    bugs: {
      url: "https://git.froth.zone/sam/srt-to-vtt/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");