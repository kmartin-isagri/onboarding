import { incrementLike } from '../database.js';

export function unlikePhoto({ photoId }) {
  return incrementLike(photoId, -1);
}