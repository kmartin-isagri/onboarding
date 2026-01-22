import { incrementLike } from '../database.js';

export function likePhoto({ photoId }) {
  return incrementLike(photoId);
}
