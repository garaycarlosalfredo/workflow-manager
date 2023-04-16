declare module "httpRequest" {
  import axios from "axios";
  export const postRequest: (url: string, data: any) => Promise<any>;
}
