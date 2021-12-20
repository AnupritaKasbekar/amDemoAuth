// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Employee, EmployeePension } = initSchema(schema);

export {
  Employee,
  EmployeePension
};