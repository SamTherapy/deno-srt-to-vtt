# SRT-to-VTT

## A basic library to convert from srt to vtt

This code is taken from the excellent [webvtt.org](https://www.webvtt.org/), I
merely adapted it to work as a library.

## Usage

```ts
const srt = `1
00:00:01,000 --> 00:00:02,000
Hello, world!
`;

console.log(srt2webvtt(srt));
`
WEBVTT

1
00:00:00.000 --> 00:00:00.000
Hello, world!
`;
```

## Installing

This was written using [deno](https://deno.land/), an alternative JavaScript
runtime to node, so you'll first need to
[install deno](https://deno.land/manual/getting_started/installation).

### Use in Deno

If you're using Deno, using this library is as simple as adding

```ts
import srt2webvtt from "https://git.froth.zone/sam/srt-to-vtt/raw/branch/master/mod.ts";
```

to your code.

### Use in Node

If you're using Node, you can use the same code as above, but instead of
importing it from a URL, you'll need to import it from npm:
`npm install deno-srt-to-vtt`.

## License

All source code is available under the [MIT License](./LICENSE).
