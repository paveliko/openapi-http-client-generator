import { Api } from "./api/Api";

type SecurityData = {
  token?: string;
} | null;

const securityWorker = (securityData: SecurityData) => {
  return {
    headers: {
      Authorization: `Bearer ${securityData?.token}`,
    },
  };
};

export const api = new Api<SecurityData>({
  securityWorker,
  baseUrl: process.env.API_URL,
});

export const setApiToken = (token?: string) => {
  api.setSecurityData({ token });
};

export default api;