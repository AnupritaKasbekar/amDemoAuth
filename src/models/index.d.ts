import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeePensionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Employee {
  readonly id: string;
  readonly empID?: number;
  readonly employeename?: string;
  readonly empTeam?: string;
  readonly empPosition?: string;
  readonly empDate?: string;
  readonly pensionRetirement?: string;
  readonly qualifiedNew?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}

export declare class EmployeePension {
  readonly id: string;
  readonly empid?: number;
  readonly pensionDepositBalance?: number;
  readonly outstandingyearpension?: number;
  readonly Year2018?: number;
  readonly Year2019?: number;
  readonly Year2020?: number;
  readonly Year2021Nov?: number;
  readonly firstQuarter?: number;
  readonly secondQuarter?: number;
  readonly thirdQuarter?: number;
  readonly subtotalforthQuarter?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EmployeePension, EmployeePensionMetaData>);
  static copyOf(source: EmployeePension, mutator: (draft: MutableModel<EmployeePension, EmployeePensionMetaData>) => MutableModel<EmployeePension, EmployeePensionMetaData> | void): EmployeePension;
}