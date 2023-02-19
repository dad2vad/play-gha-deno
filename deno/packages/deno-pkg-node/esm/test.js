import * as dntShim from "./_dnt.test_shims.js";
dntShim.Deno.test("xxx", () => {
    console.log("xxx");
});
