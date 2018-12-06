// @flow
import axios from 'axios';
import logger from '../logger';
import type { ConvParams, Response } from '../types';

const url: string = 'https://api.askir.me/images';

function setParams(params: ConvParams) {
  const requestString = {
    params: {},
  };
  if (params.Tag) { requestString.params.search = params.Tag; }
  if (params.DatePeriod) { requestString.params.start_date = params.DatePeriod.startDate; }
  if (params.DatePeriod) { requestString.params.end_date = params.DatePeriod.endDate; }
  if (params.Author) { requestString.params.author = params.Author; }
  logger.info(JSON.stringify(requestString));
  return requestString;
}

export default function request(params: ConvParams): Promise<Response> {
  return axios.get(url, setParams(params));
}
