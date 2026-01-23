import { createSchema } from "graphql-yoga";
import { albums } from "./database.js";
import { likePhoto } from "./services/likePhoto.js";
import { unlikePhoto } from "./services/unlikePhoto.js";
import { getAlbumById } from "./services/getAlbumById.js";
import { addComment } from "./services/addComment.js";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      albums: [Album!]!
      album(albumId: ID!): Album
    }

    type Mutation {
      likePhoto(photoId: ID!): Picture!
      unlikePhoto(photoId: ID!): Picture!
      addComment(photoId: ID!, content: String!): Picture!
    }

    type Message {
      id: ID!
      content: String!
    }

    type Picture {
      id: ID!
      name: String!
      url: String!
      likeCount: Int!
      liked: Boolean!
      messages: [Message!]!
    }

    type Album {
      id: ID!
      name: String!
      other: String!
      photos: [Picture!]!
    }
  `,
  resolvers: {
    Query: {
      album: (context, { albumId }) => getAlbumById(albumId),
      albums: (context) => albums,
    },

    Mutation: {
      likePhoto: (root, { photoId }) => likePhoto({ photoId }),
      unlikePhoto: (root, { photoId }) => unlikePhoto({ photoId }),
      addComment: (root, { photoId, content }) =>
        addComment({ photoId, content }),
    },

    Album: {},
    Picture: {
      liked: (photo) => Boolean(photo.likeCount),
    },
    Message: {},
  },
});
