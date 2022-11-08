import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerDraft = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Draft, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDraft = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Draft, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Draft = LazyLoading extends LazyLoadingDisabled ? EagerDraft : LazyDraft

export declare const Draft: (new (init: ModelInit<Draft>) => Draft) & {
  copyOf(source: Draft, mutator: (draft: MutableModel<Draft>) => MutableModel<Draft> | void): Draft;
}

type EagerEdition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Edition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEdition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Edition, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Edition = LazyLoading extends LazyLoadingDisabled ? EagerEdition : LazyEdition

export declare const Edition: (new (init: ModelInit<Edition>) => Edition) & {
  copyOf(source: Edition, mutator: (draft: MutableModel<Edition>) => MutableModel<Edition> | void): Edition;
}

type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Authors?: (BookAuthor | null)[] | null;
  readonly Editions?: (Edition | null)[] | null;
  readonly Draft?: Draft | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookDraftId?: string | null;
}

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Authors: AsyncCollection<BookAuthor>;
  readonly Editions: AsyncCollection<Edition>;
  readonly Draft: AsyncItem<Draft | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bookDraftId?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

type EagerAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly books?: (BookAuthor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Author, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly books: AsyncCollection<BookAuthor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Author = LazyLoading extends LazyLoadingDisabled ? EagerAuthor : LazyAuthor

export declare const Author: (new (init: ModelInit<Author>) => Author) & {
  copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

type EagerBookAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookAuthor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookId?: string | null;
  readonly authorId?: string | null;
  readonly book: Book;
  readonly author: Author;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBookAuthor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookAuthor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bookId?: string | null;
  readonly authorId?: string | null;
  readonly book: AsyncItem<Book>;
  readonly author: AsyncItem<Author>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BookAuthor = LazyLoading extends LazyLoadingDisabled ? EagerBookAuthor : LazyBookAuthor

export declare const BookAuthor: (new (init: ModelInit<BookAuthor>) => BookAuthor) & {
  copyOf(source: BookAuthor, mutator: (draft: MutableModel<BookAuthor>) => MutableModel<BookAuthor> | void): BookAuthor;
}