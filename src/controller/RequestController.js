// @flow
import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import logger from '../logger';
import type {
  ConvParams, Response, ResponseData, PresentParams,
} from '../types';
import 'datejs';

const baseUrl: string = process.env.API_URL || '';
const getUrl: string = `${baseUrl}/images`;
const presentUrl: string = `${baseUrl}/presentations`;


function formatISODate(dateString: string): string {
  const date = new Date(dateString);
  const dateStringOut = date.toISOString();
  return dateStringOut;
}

export function setGetParams(paramsIn: ConvParams) {
  const params = {};
  if (paramsIn.Tag) { params.search = paramsIn.Tag.join(', '); }
  if (paramsIn.DatePeriod) { params.start_date = formatISODate(paramsIn.DatePeriod.startDate); }
  if (paramsIn.DatePeriod) { params.end_date = formatISODate(paramsIn.DatePeriod.endDate); }
  if (paramsIn.Author) { params.author = paramsIn.Author; }

  const requestString = {
    params,
  };
  logger.info(`Request ${JSON.stringify(requestString)}`);

  return requestString;
}

export function setPresentParams(imageIds: Array<string>): PresentParams {
  const params = { imageIds };
  return params;
}

export async function getImages(params: ConvParams): Promise<ResponseData> {
  const response: Response = await axios.get(getUrl, setGetParams(params));
  const responseData: ResponseData = camelizeKeys(response.data);
  return responseData;
}
export async function presentImages(params: Array<string>) {
  logger.info(`Posting this: ${JSON.stringify(decamelizeKeys(setPresentParams(params)))}`);
  axios.post(presentUrl, decamelizeKeys(setPresentParams(params)));
}
