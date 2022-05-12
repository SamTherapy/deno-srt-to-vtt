// SPDX-License-Identifier: MIT
import convert from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("convert, 1 sub", () => {
  const srt = `1
00:00:00,000 --> 00:00:00,000
Hello, world!
`;
  const expected = `WEBVTT

1
00:00:00.000 --> 00:00:00.000
Hello, world!

`;
  assertEquals(convert(srt), expected);
});

Deno.test("convert, multiple subs", () => {
  const srt = `1
00:02:09,545 --> 00:02:12,757
rare roasted partridge breast
in raspberry coulis
with a sorrel timbale.

2
00:02:13,007 --> 00:02:16,093
...and grilled
free-range rabbit
with herbed french fries.

3
00:02:16,302 --> 00:02:20,014
Our pasta tonight is
a squid ravioli
in a lemon grass broth.

4
00:02:24,602 --> 00:02:28,731
God, I hate this place.
It's a chick's restaurant.
Why aren't we at Dorsia?

5
00:02:28,898 --> 00:02:30,816
Because Bateman won't give
the maitre d' head.
`;

  const expected = `WEBVTT

1
00:02:09.545 --> 00:02:12.757
rare roasted partridge breast
in raspberry coulis
with a sorrel timbale.

2
00:02:13.007 --> 00:02:16.093
...and grilled
free-range rabbit
with herbed french fries.

3
00:02:16.302 --> 00:02:20.014
Our pasta tonight is
a squid ravioli
in a lemon grass broth.

4
00:02:24.602 --> 00:02:28.731
God, I hate this place.
It's a chick's restaurant.
Why aren't we at Dorsia?

5
00:02:28.898 --> 00:02:30.816
Because Bateman won't give
the maitre d' head.

`;
  assertEquals(convert(srt), expected);
});

Deno.test("Invalid time string", () => {
  const srt = `1
00:00:00,000,0 --> 00:00:00,000
Hello, world!
`;
  assertEquals(convert(srt), "WEBVTT\n\n");
});

Deno.test("Invalid file", () => {
  const srt = `1
// This is a comment
Hello, world!
`;
  assertEquals(convert(srt), "WEBVTT\n\n");
});
