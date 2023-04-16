import axios from "axios";

export const postRequest = async (url: string, data: any): Promise<any> => {
  const res = await axios.post(url, data);
  console.log("post request success");
  return res;
};
