export * from "./episode";
export * from "./character";
export * from "./location";

export interface IQuery {
  page: number;
  count?: number;
  name?: string;
  type?: string;
  dimension?: string;
  episode?: string;
}
