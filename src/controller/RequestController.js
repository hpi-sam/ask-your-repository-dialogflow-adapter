// @flow
import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import logger from '../logger';
import type {
  ConvParams, Response, ResponseData, PresentParams,
} from '../types';

const baseUrl: string = process.env.API_URL || '';
const getUrl: string = `${baseUrl}/images`;
const presentUrl: string = `${baseUrl}/presentations`;

export function setGetParams(params: ConvParams) {
  const requestString = {
    params: {},
  };
  if (params.Tag) { requestString.params.search = params.Tag.join(', '); }
  if (params.DatePeriod) { requestString.params.start_date = params.DatePeriod.startDate; }
  if (params.DatePeriod) { requestString.params.end_date = params.DatePeriod.endDate; }
  if (params.Author) { requestString.params.author = params.Author; }
  logger.info(`Request ${JSON.stringify(requestString)}`);
  return requestString;
}

export function setPresentParams(imageIds: Array<string>): PresentParams {
  const params = { imageIds };
  return params;
}

export async function getImages(params: ConvParams): Promise<ResponseData> {
  const response: Response = await axios.get(getUrl, setGetParams(params));
  return camelizeKeys(response.data);
}
export async function presentImages(params: Array<string>) {
  logger.info(`Posting this: ${JSON.stringify(decamelizeKeys(setPresentParams(params)))}`);
  axios.post(presentUrl, decamelizeKeys(setPresentParams(params)));
}
