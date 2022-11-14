/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMembersId
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMembersId
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMembersId
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      Project {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        projectTeamId
      }
      Members {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamProjectId
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      Project {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        projectTeamId
      }
      Members {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamProjectId
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      Project {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        projectTeamId
      }
      Members {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamProjectId
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTeamId
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTeamId
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      team {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamProjectId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      projectTeamId
    }
  }
`;
