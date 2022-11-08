// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Member, Team, Project } = initSchema(schema);

export {
  Member,
  Team,
  Project
};