/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDraft = /* GraphQL */ `
  mutation CreateDraft(
    $input: CreateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    createDraft(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDraft = /* GraphQL */ `
  mutation UpdateDraft(
    $input: UpdateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    updateDraft(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDraft = /* GraphQL */ `
  mutation DeleteDraft(
    $input: DeleteDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    deleteDraft(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEdition = /* GraphQL */ `
  mutation CreateEdition(
    $input: CreateEditionInput!
    $condition: ModelEditionConditionInput
  ) {
    createEdition(input: $input, condition: $condition) {
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
export const updateEdition = /* GraphQL */ `
  mutation UpdateEdition(
    $input: UpdateEditionInput!
    $condition: ModelEditionConditionInput
  ) {
    updateEdition(input: $input, condition: $condition) {
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
export const deleteEdition = /* GraphQL */ `
  mutation DeleteEdition(
    $input: DeleteEditionInput!
    $condition: ModelEditionConditionInput
  ) {
    deleteEdition(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createBookAuthor = /* GraphQL */ `
  mutation CreateBookAuthor(
    $input: CreateBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    createBookAuthor(input: $input, condition: $condition) {
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
export const updateBookAuthor = /* GraphQL */ `
  mutation UpdateBookAuthor(
    $input: UpdateBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    updateBookAuthor(input: $input, condition: $condition) {
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
export const deleteBookAuthor = /* GraphQL */ `
  mutation DeleteBookAuthor(
    $input: DeleteBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    deleteBookAuthor(input: $input, condition: $condition) {
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
