declare module "httpRequest" {
  export const fetchRequest: (url: string, data: any) => Promise<any>;
}
