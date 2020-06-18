import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
Deno.test("hello assert", () => {
    const x = 1 + 2;
    assertEquals(x, 3);
});
Deno.test("hello throws", () => {
    const x = 1 + 2;
    if (x !== 3) {
        throw Error("x should be equal to 3");
    }
});
//# sourceMappingURL=file:///home/drathal/code/deno_rest/vendor/gen/file/home/drathal/code/deno_rest/src/controller_test.ts.js.map