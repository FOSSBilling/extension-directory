import { Extension } from "interfaces";
import { findAuthorByID } from "./author";

/** Dummy extension data. We probably should migrate to a database as these get bigger. */
// Get the release datetime from the GitHub API: https://api.github.com/repos/org/repo/releases
export const extensionData: Extension[] = [
  // ... existing extensions remain the same, adding Amazon Pay at the end before closing bracket
];