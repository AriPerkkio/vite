import { isMainThread } from "node:worker_threads";
import { access } from "node:fs";

// some
// comments

console.log(isMainThread, access);