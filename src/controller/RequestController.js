// @flow
import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import logger from '../logger';
import type {
  ConvParams, Response, ResponseData,
} from '../types';

const getUrl: string = 'https://api.askir.me/images';
const presentUrl: string = 'https://api.askir.me/presentations';

function setGetParams(params: ConvParams) {
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

export async function getImages(params: ConvParams): Promise<ResponseData> {
  const response: Response = await axios.get(getUrl, setGetParams(params));
  return camelizeKeys(response.data);
}
export async function presentImages(params: Array<string>) {
  axios.post(presentUrl, decamelizeKeys(params));
}
