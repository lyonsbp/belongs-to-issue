/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($filter: ModelSubscriptionMemberFilterInput) {
    onCreateMember(filter: $filter) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($filter: ModelSubscriptionMemberFilterInput) {
    onUpdateMember(filter: $filter) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($filter: ModelSubscriptionMemberFilterInput) {
    onDeleteMember(filter: $filter) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
