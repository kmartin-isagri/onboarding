import { findAlbumById } from "../database.js";

export function getAlbumById(albumId) {
  return findAlbumById(albumId);
}
