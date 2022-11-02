/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDraft = /* GraphQL */ `
  subscription OnCreateDraft($filter: ModelSubscriptionDraftFilterInput) {
    onCreateDraft(filter: $filter) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDraft = /* GraphQL */ `
  subscription OnUpdateDraft($filter: ModelSubscriptionDraftFilterInput) {
    onUpdateDraft(filter: $filter) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDraft = /* GraphQL */ `
  subscription OnDeleteDraft($filter: ModelSubscriptionDraftFilterInput) {
    onDeleteDraft(filter: $filter) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEdition = /* GraphQL */ `
  subscription OnCreateEdition($filter: ModelSubscriptionEditionFilterInput) {
    onCreateEdition(filter: $filter) {
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
export const onUpdateEdition = /* GraphQL */ `
  subscription OnUpdateEdition($filter: ModelSubscriptionEditionFilterInput) {
    onUpdateEdition(filter: $filter) {
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
export const onDeleteEdition = /* GraphQL */ `
  subscription OnDeleteEdition($filter: ModelSubscriptionEditionFilterInput) {
    onDeleteEdition(filter: $filter) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onCreateAuthor(filter: $filter) {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onUpdateAuthor(filter: $filter) {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onDeleteAuthor(filter: $filter) {
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
export const onCreateBookAuthor = /* GraphQL */ `
  subscription OnCreateBookAuthor(
    $filter: ModelSubscriptionBookAuthorFilterInput
  ) {
    onCreateBookAuthor(filter: $filter) {
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
export const onUpdateBookAuthor = /* GraphQL */ `
  subscription OnUpdateBookAuthor(
    $filter: ModelSubscriptionBookAuthorFilterInput
  ) {
    onUpdateBookAuthor(filter: $filter) {
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
export const onDeleteBookAuthor = /* GraphQL */ `
  subscription OnDeleteBookAuthor(
    $filter: ModelSubscriptionBookAuthorFilterInput
  ) {
    onDeleteBookAuthor(filter: $filter) {
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
