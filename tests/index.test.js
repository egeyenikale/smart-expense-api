import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Smart Expense API exposes project metadata", () => {
  assert.equal(project.slug, "smart-expense-api");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
