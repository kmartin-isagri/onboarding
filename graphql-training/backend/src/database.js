import uniqid from "uniqid";

export const albums = [
  {
    id: "1",
    name: "Mon album photo",
    other: "Your Name",
    photos: [
      {
        name: "Plante",
        url: "https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "1",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Koala",
        url: "https://images.pexels.com/photos/7243591/pexels-photo-7243591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "2",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Tortue",
        url: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "3",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Montagne",
        url: "https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "4",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Ville",
        url: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "5",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Théatre",
        url: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "6",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Foret",
        url: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "7",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Ciel",
        url: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "8",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Fruits",
        url: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "9",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Lion",
        url: "https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "10",
        likeCount: 0,
        messages: [],
      },
      {
        name: "Café",
        url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        id: "12",
        likeCount: 0,
        messages: [],
      },
    ],
  },
];

export function findPhotoById(photoId) {
  const photos = albums.flatMap((album) => album.photos);
  return photos.find((photo) => photo.id === photoId);
}

export function findAlbumById(albumId) {
  return albums.find((album) => album.id === albumId);
}

export function incrementLike(photoId, by = 1) {
  const photo = findPhotoById(photoId);
  if (photo) {
    photo.likeCount += by;
  }

  return photo;
}

export function createComment(photoId, { content }) {
  const photo = findPhotoById(photoId);
  if (photo) {
    photo.messages.push({
      id: uniqid(),
      content,
    });
  }

  return photo;
}
