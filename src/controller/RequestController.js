// @flow
import axios from 'axios';
import { camelizeKeys } from 'humps';
import logger from '../logger';
import type { ConvParams, Response, ResponseData } from '../types';

const url: string = 'https://api.askir.me/images';

function setParams(params: ConvParams) {
  const requestString = {
    params: {},
  };
  if (params.Tag) { requestString.params.search = params.Tag; }
  if (params.DatePeriod) { requestString.params.start_date = params.DatePeriod.startDate; }
  if (params.DatePeriod) { requestString.params.end_date = params.DatePeriod.endDate; }
  if (params.Author) { requestString.params.author = params.Author; }
  logger.info(`Request ${JSON.stringify(requestString)}`);
  return requestString;
}

export default async function request(params: ConvParams): Promise<ResponseData> {
  const response: Response = await axios.get(url, setParams(params));
  return camelizeKeys(response.data);
}
