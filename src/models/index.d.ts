import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type MemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMember = {
  readonly id: string;
  readonly name?: string | null;
  readonly teamID: string;
  readonly Team?: Team | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMember = {
  readonly id: string;
  readonly name?: string | null;
  readonly teamID: string;
  readonly Team: AsyncItem<Team | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Member = LazyLoading extends LazyLoadingDisabled ? EagerMember : LazyMember

export declare const Member: (new (init: ModelInit<Member, MemberMetaData>) => Member) & {
  copyOf(source: Member, mutator: (draft: MutableModel<Member, MemberMetaData>) => MutableModel<Member, MemberMetaData> | void): Member;
}

type EagerTeam = {
  readonly id: string;
  readonly name: string;
  readonly Project?: Project | null;
  readonly Members?: (Member | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamProjectId?: string | null;
}

type LazyTeam = {
  readonly id: string;
  readonly name: string;
  readonly Project: AsyncItem<Project | undefined>;
  readonly Members: AsyncCollection<Member>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamProjectId?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team, TeamMetaData>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

type EagerProject = {
  readonly id: string;
  readonly name: string;
  readonly Team?: Team | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name: string;
  readonly Team: AsyncItem<Team | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}