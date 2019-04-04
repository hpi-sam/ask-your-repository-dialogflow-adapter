// @flow
import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { config } from 'dotenv';
import logger from '../logger';
import type {
  ConvParams, Response, ResponseData, AuthData,
} from '../types';
import 'datejs';

config();
const baseUrl: string = process.env.API_URL || '';
const loginUrl: string = `${baseUrl}/authentications`;

function getApi(accessToken: string): any {
  const axiosConfig = {
    baseURL: baseUrl,
    timeout: 1000,
    headers: {},
  };
  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return axios.create(axiosConfig);
}

function formatISODate(dateString: string): string {
  const date = new Date(dateString);
  const dateStringOut = date.toISOString();
  return dateStringOut;
}

export function setGetParams(paramsIn: ConvParams) {
  const params = {};
  if (paramsIn.Team) { params.teamId = paramsIn.Team; }
  if (paramsIn.Tag) { params.search = paramsIn.Tag.join(', '); }
  if (paramsIn.DatePeriod) { params.startDate = formatISODate(paramsIn.DatePeriod.startDate); }
  if (paramsIn.DatePeriod) { params.endDate = formatISODate(paramsIn.DatePeriod.endDate); }
  if (paramsIn.Author) { params.author = paramsIn.Author; }

  logger.info(`Request ${JSON.stringify(params)}`);

  return decamelizeKeys(params);
}

export async function getImages(accessToken: string, params: ConvParams): Promise<ResponseData> {
  logger.info('get images:');
  logger.info(JSON.stringify(setGetParams(params)));
  const response: Response = await getApi(accessToken).get('/images', { params: setGetParams(params) });
  const responseData: any = camelizeKeys(response.data);
  return responseData;
}

export async function getTeams(accessToken: string): Promise<ResponseData> {
  const response: Response = await getApi(accessToken).get('/teams');
  const responseData: any = camelizeKeys(response.data);
  return responseData;
}

export async function login(idToken: string): Promise<AuthData> {
  const params = decamelizeKeys({ idToken, setCookies: false });
  const response: Response = await axios.post(loginUrl, params);
  const responseData: any = camelizeKeys(response.data);
  return responseData;
}
