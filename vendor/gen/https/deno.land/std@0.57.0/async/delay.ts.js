// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/* Resolves after the given number of milliseconds. */
export function delay(ms) {
    return new Promise((res) => setTimeout(() => {
        res();
    }, ms));
}
//# sourceMappingURL=file:///home/drathal/code/deno_rest/vendor/gen/https/deno.land/std@0.57.0/async/delay.ts.js.map