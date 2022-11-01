import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type DraftMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EditionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BookAuthorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDraft = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDraft = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Draft = LazyLoading extends LazyLoadingDisabled ? EagerDraft : LazyDraft

export declare const Draft: (new (init: ModelInit<Draft, DraftMetaData>) => Draft) & {
  copyOf(source: Draft, mutator: (draft: MutableModel<Draft, DraftMetaData>) => MutableModel<Draft, DraftMetaData> | void): Draft;
}

type EagerEdition = {
  readonly id: string;
  readonly bookID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEdition = {
  readonly id: string;
  readonly bookID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Edition = LazyLoading extends LazyLoadingDisabled ? EagerEdition : LazyEdition

export declare const Edition: (new (init: ModelInit<Edition, EditionMetaData>) => Edition) & {
  copyOf(source: Edition, mutator: (draft: MutableModel<Edition, EditionMetaData>) => MutableModel<Edition, EditionMetaData> | void): Edition;
}

type EagerBook = {
  readonly id: string;
  readonly Authors?: (BookAuthor | null)[] | null;
  readonly Editions?: (Edition | null)[] | null;
  readonly Draft?: Draft | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookDraftId?: string | null;
}

type LazyBook = {
  readonly id: string;
  readonly Authors: AsyncCollection<BookAuthor>;
  readonly Editions: AsyncCollection<Edition>;
  readonly Draft: AsyncItem<Draft | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookDraftId?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book, BookMetaData>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book, BookMetaData>) => MutableModel<Book, BookMetaData> | void): Book;
}

type EagerAuthor = {
  readonly id: string;
  readonly books?: (BookAuthor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthor = {
  readonly id: string;
  readonly books: AsyncCollection<BookAuthor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Author = LazyLoading extends LazyLoadingDisabled ? EagerAuthor : LazyAuthor

export declare const Author: (new (init: ModelInit<Author, AuthorMetaData>) => Author) & {
  copyOf(source: Author, mutator: (draft: MutableModel<Author, AuthorMetaData>) => MutableModel<Author, AuthorMetaData> | void): Author;
}

type EagerBookAuthor = {
  readonly id: string;
  readonly book: Book;
  readonly author: Author;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBookAuthor = {
  readonly id: string;
  readonly book: AsyncItem<Book>;
  readonly author: AsyncItem<Author>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BookAuthor = LazyLoading extends LazyLoadingDisabled ? EagerBookAuthor : LazyBookAuthor

export declare const BookAuthor: (new (init: ModelInit<BookAuthor, BookAuthorMetaData>) => BookAuthor) & {
  copyOf(source: BookAuthor, mutator: (draft: MutableModel<BookAuthor, BookAuthorMetaData>) => MutableModel<BookAuthor, BookAuthorMetaData> | void): BookAuthor;
}