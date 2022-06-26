import { auditLogApiEndpoints } from "./auditlog";
import * as helpers from "./helpers";


export const Api = {
  ...helpers,
  audiLogApi: auditLogApiEndpoints
};