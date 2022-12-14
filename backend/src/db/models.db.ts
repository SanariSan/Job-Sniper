/*
 * TODO: CHOOSE ANOTHER TOOL (not pg-sql) - IT IS NOT DETECTING DEFAULT KEYWORD
 * This file was generated by a tool.
 * Rerun sql-ts to regenerate this file.
 */
export interface ISearchQueryEntity {
  id?: number;
  isaknowledged?: boolean;
  lastaknowledged?: Date | null;
  modified?: Date;
  notifypostedsecagomax?: number | null;
  searchparams: string;
  searchtext: string;
  userid: number;
  uuid_?: string;
}
export interface ISearchQueryVacancyHHEntity {
  searchqueryid: number;
  vacancyid: number;
}
export interface ISystemRoleEntity {
  id?: number;
  rolename: string;
}
export interface ISystemUserEntity {
  createdon?: Date;
  email: string;
  hhtoken?: string | null;
  id?: number;
  isactivated?: boolean;
  modified?: Date;
  otptoken?: string | null;
  passwordhash: string;
  telegramid?: string | null;
  username: string;
}
export interface ISystemUserSystemRoleEntity {
  roleid: number;
  userid: number;
}
export interface IVacancyHHEntity {
  addressraw?: string | null;
  areaid: number;
  createdat: string;
  descriptionfull?: string | null;
  employername: string;
  employerurl: string;
  hashmd5: string;
  hastest: boolean;
  hhid: number;
  id?: number;
  modified?: Date;
  publishedat: string;
  responseletterrequired: boolean;
  salarycurrencyid?: number | null;
  salaryfrom?: number | null;
  salaryto?: number | null;
  scheduleid: string;
  snippetrequirement?: string | null;
  snippetresponsibility?: string | null;
  title: string;
}
