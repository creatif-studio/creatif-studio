import { BACKEND_ENDPOINT, BACKEND_ACCESS_TOKEN } from "../../../config/global.json";

import axios, { AxiosResponse } from "axios";

import * as https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

class BackendService {

  httpRequest = axios.create({
    baseURL: BACKEND_ENDPOINT,
  });

  constructor({ header }: any) {
    this.setHeader(header);
  }

  setHeader = (header: any) => {
    this.httpRequest.defaults.headers = {
      ...header,
      httpsAgent: agent,
    };
  };

  private queryBuilder = (query: object): string => {
    if (Object.keys(query).length) {
      const nonFieldQuery: string[] = [];
      const fieldQuery: string[] = [];

      for (const [key, value] of Object.entries(query)) {
        if (["limit", "orderBy", "select", "skip", "or", "sort"].includes(key)) {
          if (key == "or") {
            value.map((v, i) => {
              for (const [key, value] of Object.entries(v)) {
                nonFieldQuery.push(`$or[${i}][${key}]=${value}`);
              }
            });
          } else if (key == "sort"){
            for (const [key, val] of Object.entries(value)) {
              nonFieldQuery.push(`$sort[${key}]=${val}`);
            }
          } else nonFieldQuery.push(`$${key}=${value}`);
        } else {
          if (typeof value == 'string') fieldQuery.push(`${key}=${value}`);
          else {
            for (const [op, val] of Object.entries(value)) {
              fieldQuery.push(`${key}[${op}]=${val}`);
            }
          }
        }
      }

      let queryParams = "?" + fieldQuery.join("&");
      if (nonFieldQuery.length) {
        queryParams += "&" + nonFieldQuery.join("&");
      }
      return queryParams;
    }
    return "";
  };

  get = async ({
    tableName,
    id,
  }: {
    tableName: string;
    id: string;
  }): Promise<AxiosResponse> => {
    return await this.httpRequest.get("/" + tableName + "/" + id);
  };

  find = async ({
    tableName,
    query = {},
  }: {
    tableName: string;
    query?: object;
  }): Promise<AxiosResponse> => {
    return await this.httpRequest.get("/" + tableName + this.queryBuilder(query));
  };

  create = async ({
    tableName,
    body,
  }: {
    tableName: string;
    body: object;
  }): Promise<AxiosResponse> => {
    return await this.httpRequest.post("/" + tableName, body,);
  };

  patch = async ({
    tableName,
    id,
    body,
  }: {
    tableName: string;
    id: string;
    body: object;
  }): Promise<AxiosResponse> => {
    return await this.httpRequest.patch("/" + tableName + "/" + id, body);
  };

  remove = async ({
    tableName,
    id,
  }: {
    tableName: string;
    id: string;
  }): Promise<AxiosResponse> => {
    const a = await this.httpRequest.delete("/" + tableName + "/" + id);
    return a
  };

  removeMany = async ({
    tableName,
    ids,
  }: {
    tableName: string;
    ids: string[];
  }) => {
    const execsDelete = ids.map((id) => this.remove({ tableName, id }));
    return await Promise.all(execsDelete);
  };

  graphql = ({
    query,
    variables,
    headers
  }: {
    query: string;
    variables?: object;
    headers?: object
  }) => {
    
    return this.httpRequest.post(BACKEND_ENDPOINT + "/graphql", {
      query,
      variables
    })
  };
}

export default BackendService