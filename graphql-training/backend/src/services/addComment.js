import { createComment } from "../database.js";

export function addComment({ photoId, content }) {
  return createComment(photoId, { content });
}
