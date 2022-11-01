// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Draft, Edition, Book, Author, BookAuthor } = initSchema(schema);

export {
  Draft,
  Edition,
  Book,
  Author,
  BookAuthor
};