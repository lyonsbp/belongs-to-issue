/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDraftInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelDraftConditionInput = {
  and?: Array< ModelDraftConditionInput | null > | null,
  or?: Array< ModelDraftConditionInput | null > | null,
  not?: ModelDraftConditionInput | null,
};

export type Draft = {
  __typename: "Draft",
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDraftInput = {
  id: string,
  _version?: number | null,
};

export type DeleteDraftInput = {
  id: string,
  _version?: number | null,
};

export type CreateEditionInput = {
  id?: string | null,
  bookID: string,
  _version?: number | null,
};

export type ModelEditionConditionInput = {
  bookID?: ModelIDInput | null,
  and?: Array< ModelEditionConditionInput | null > | null,
  or?: Array< ModelEditionConditionInput | null > | null,
  not?: ModelEditionConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Edition = {
  __typename: "Edition",
  id: string,
  bookID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEditionInput = {
  id: string,
  bookID?: string | null,
  _version?: number | null,
};

export type DeleteEditionInput = {
  id: string,
  _version?: number | null,
};

export type CreateBookInput = {
  id?: string | null,
  _version?: number | null,
  bookDraftId?: string | null,
};

export type ModelBookConditionInput = {
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
  bookDraftId?: ModelIDInput | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  Authors?: ModelBookAuthorConnection | null,
  Editions?: ModelEditionConnection | null,
  Draft?: Draft | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  bookDraftId?: string | null,
};

export type ModelBookAuthorConnection = {
  __typename: "ModelBookAuthorConnection",
  items:  Array<BookAuthor | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BookAuthor = {
  __typename: "BookAuthor",
  id: string,
  bookID: string,
  authorID: string,
  book: Book,
  author: Author,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Author = {
  __typename: "Author",
  id: string,
  books?: ModelBookAuthorConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelEditionConnection = {
  __typename: "ModelEditionConnection",
  items:  Array<Edition | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateBookInput = {
  id: string,
  _version?: number | null,
  bookDraftId?: string | null,
};

export type DeleteBookInput = {
  id: string,
  _version?: number | null,
};

export type CreateAuthorInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelAuthorConditionInput = {
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorInput = {
  id: string,
  _version?: number | null,
};

export type DeleteAuthorInput = {
  id: string,
  _version?: number | null,
};

export type CreateBookAuthorInput = {
  id?: string | null,
  bookID: string,
  authorID: string,
  _version?: number | null,
};

export type ModelBookAuthorConditionInput = {
  bookID?: ModelIDInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelBookAuthorConditionInput | null > | null,
  or?: Array< ModelBookAuthorConditionInput | null > | null,
  not?: ModelBookAuthorConditionInput | null,
};

export type UpdateBookAuthorInput = {
  id: string,
  bookID?: string | null,
  authorID?: string | null,
  _version?: number | null,
};

export type DeleteBookAuthorInput = {
  id: string,
  _version?: number | null,
};

export type ModelDraftFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelDraftFilterInput | null > | null,
  or?: Array< ModelDraftFilterInput | null > | null,
  not?: ModelDraftFilterInput | null,
};

export type ModelDraftConnection = {
  __typename: "ModelDraftConnection",
  items:  Array<Draft | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEditionFilterInput = {
  id?: ModelIDInput | null,
  bookID?: ModelIDInput | null,
  and?: Array< ModelEditionFilterInput | null > | null,
  or?: Array< ModelEditionFilterInput | null > | null,
  not?: ModelEditionFilterInput | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
  bookDraftId?: ModelIDInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items:  Array<Author | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBookAuthorFilterInput = {
  id?: ModelIDInput | null,
  bookID?: ModelIDInput | null,
  authorID?: ModelIDInput | null,
  and?: Array< ModelBookAuthorFilterInput | null > | null,
  or?: Array< ModelBookAuthorFilterInput | null > | null,
  not?: ModelBookAuthorFilterInput | null,
};

export type ModelSubscriptionDraftFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDraftFilterInput | null > | null,
  or?: Array< ModelSubscriptionDraftFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionEditionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bookID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEditionFilterInput | null > | null,
  or?: Array< ModelSubscriptionEditionFilterInput | null > | null,
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type ModelSubscriptionAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuthorFilterInput | null > | null,
};

export type ModelSubscriptionBookAuthorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bookID?: ModelSubscriptionIDInput | null,
  authorID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBookAuthorFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookAuthorFilterInput | null > | null,
};

export type CreateDraftMutationVariables = {
  input: CreateDraftInput,
  condition?: ModelDraftConditionInput | null,
};

export type CreateDraftMutation = {
  createDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDraftMutationVariables = {
  input: UpdateDraftInput,
  condition?: ModelDraftConditionInput | null,
};

export type UpdateDraftMutation = {
  updateDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDraftMutationVariables = {
  input: DeleteDraftInput,
  condition?: ModelDraftConditionInput | null,
};

export type DeleteDraftMutation = {
  deleteDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEditionMutationVariables = {
  input: CreateEditionInput,
  condition?: ModelEditionConditionInput | null,
};

export type CreateEditionMutation = {
  createEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEditionMutationVariables = {
  input: UpdateEditionInput,
  condition?: ModelEditionConditionInput | null,
};

export type UpdateEditionMutation = {
  updateEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEditionMutationVariables = {
  input: DeleteEditionInput,
  condition?: ModelEditionConditionInput | null,
};

export type DeleteEditionMutation = {
  deleteEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBookAuthorMutationVariables = {
  input: CreateBookAuthorInput,
  condition?: ModelBookAuthorConditionInput | null,
};

export type CreateBookAuthorMutation = {
  createBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBookAuthorMutationVariables = {
  input: UpdateBookAuthorInput,
  condition?: ModelBookAuthorConditionInput | null,
};

export type UpdateBookAuthorMutation = {
  updateBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBookAuthorMutationVariables = {
  input: DeleteBookAuthorInput,
  condition?: ModelBookAuthorConditionInput | null,
};

export type DeleteBookAuthorMutation = {
  deleteBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetDraftQueryVariables = {
  id: string,
};

export type GetDraftQuery = {
  getDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDraftsQueryVariables = {
  filter?: ModelDraftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDraftsQuery = {
  listDrafts?:  {
    __typename: "ModelDraftConnection",
    items:  Array< {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDraftsQueryVariables = {
  filter?: ModelDraftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDraftsQuery = {
  syncDrafts?:  {
    __typename: "ModelDraftConnection",
    items:  Array< {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEditionQueryVariables = {
  id: string,
};

export type GetEditionQuery = {
  getEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEditionsQueryVariables = {
  filter?: ModelEditionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEditionsQuery = {
  listEditions?:  {
    __typename: "ModelEditionConnection",
    items:  Array< {
      __typename: "Edition",
      id: string,
      bookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEditionsQueryVariables = {
  filter?: ModelEditionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEditionsQuery = {
  syncEditions?:  {
    __typename: "ModelEditionConnection",
    items:  Array< {
      __typename: "Edition",
      id: string,
      bookID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBooksQuery = {
  syncBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAuthorsQuery = {
  syncAuthors?:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBookAuthorQueryVariables = {
  id: string,
};

export type GetBookAuthorQuery = {
  getBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBookAuthorsQueryVariables = {
  filter?: ModelBookAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookAuthorsQuery = {
  listBookAuthors?:  {
    __typename: "ModelBookAuthorConnection",
    items:  Array< {
      __typename: "BookAuthor",
      id: string,
      bookID: string,
      authorID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBookAuthorsQueryVariables = {
  filter?: ModelBookAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBookAuthorsQuery = {
  syncBookAuthors?:  {
    __typename: "ModelBookAuthorConnection",
    items:  Array< {
      __typename: "BookAuthor",
      id: string,
      bookID: string,
      authorID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDraftSubscriptionVariables = {
  filter?: ModelSubscriptionDraftFilterInput | null,
};

export type OnCreateDraftSubscription = {
  onCreateDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDraftSubscriptionVariables = {
  filter?: ModelSubscriptionDraftFilterInput | null,
};

export type OnUpdateDraftSubscription = {
  onUpdateDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDraftSubscriptionVariables = {
  filter?: ModelSubscriptionDraftFilterInput | null,
};

export type OnDeleteDraftSubscription = {
  onDeleteDraft?:  {
    __typename: "Draft",
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEditionSubscriptionVariables = {
  filter?: ModelSubscriptionEditionFilterInput | null,
};

export type OnCreateEditionSubscription = {
  onCreateEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEditionSubscriptionVariables = {
  filter?: ModelSubscriptionEditionFilterInput | null,
};

export type OnUpdateEditionSubscription = {
  onUpdateEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEditionSubscriptionVariables = {
  filter?: ModelSubscriptionEditionFilterInput | null,
};

export type OnDeleteEditionSubscription = {
  onDeleteEdition?:  {
    __typename: "Edition",
    id: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    Authors?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Editions?:  {
      __typename: "ModelEditionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Draft?:  {
      __typename: "Draft",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    bookDraftId?: string | null,
  } | null,
};

export type OnCreateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorFilterInput | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    books?:  {
      __typename: "ModelBookAuthorConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBookAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionBookAuthorFilterInput | null,
};

export type OnCreateBookAuthorSubscription = {
  onCreateBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBookAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionBookAuthorFilterInput | null,
};

export type OnUpdateBookAuthorSubscription = {
  onUpdateBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBookAuthorSubscriptionVariables = {
  filter?: ModelSubscriptionBookAuthorFilterInput | null,
};

export type OnDeleteBookAuthorSubscription = {
  onDeleteBookAuthor?:  {
    __typename: "BookAuthor",
    id: string,
    bookID: string,
    authorID: string,
    book:  {
      __typename: "Book",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      bookDraftId?: string | null,
    },
    author:  {
      __typename: "Author",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
