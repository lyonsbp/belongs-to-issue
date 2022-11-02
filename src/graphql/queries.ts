/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDraft = /* GraphQL */ `
  query GetDraft($id: ID!) {
    getDraft(id: $id) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDrafts = /* GraphQL */ `
  query ListDrafts(
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDrafts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDrafts = /* GraphQL */ `
  query SyncDrafts(
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDrafts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEdition = /* GraphQL */ `
  query GetEdition($id: ID!) {
    getEdition(id: $id) {
      id
      bookID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEditions = /* GraphQL */ `
  query ListEditions(
    $filter: ModelEditionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEditions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEditions = /* GraphQL */ `
  query SyncEditions(
    $filter: ModelEditionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEditions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bookID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      Authors {
        nextToken
        startedAt
      }
      Editions {
        nextToken
        startedAt
      }
      Draft {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookDraftId
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        bookDraftId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBooks = /* GraphQL */ `
  query SyncBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        bookDraftId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      books {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBookAuthor = /* GraphQL */ `
  query GetBookAuthor($id: ID!) {
    getBookAuthor(id: $id) {
      id
      bookID
      authorID
      book {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        bookDraftId
      }
      author {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBookAuthors = /* GraphQL */ `
  query ListBookAuthors(
    $filter: ModelBookAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookID
        authorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookAuthors = /* GraphQL */ `
  query SyncBookAuthors(
    $filter: ModelBookAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bookID
        authorID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
