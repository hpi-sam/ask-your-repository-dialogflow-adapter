// @flow
import axios from 'axios';
import logger from '../logger';
import type{ convParams } from './DialogflowController';

const url: string = 'https://api.askir.me/images';

export type Image = {
  id: string,
  type: string,
  created_at: string,
  updated_at: string,
  tags: Array<string>, file_date: string,
  url: string,
  score: number
}
export type Response = { data: { images: Array<Image> } };


function setParams(params: convParams) {
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

export default function request(params: convParams): Promise<Response> {
  return axios.get(url, setParams(params));
}
