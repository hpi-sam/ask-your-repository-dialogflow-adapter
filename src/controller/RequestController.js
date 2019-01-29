// @flow
import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import logger from '../logger';
import type {
  ConvParams, Response, ResponseData,
} from '../types';
import 'datejs';

const baseUrl: string = process.env.API_URL || '';
const getUrl: string = `${baseUrl}/images`;


function formatISODate(dateString: string): string {
  const date = new Date(dateString);
  const dateStringOut = date.toISOString();
  return dateStringOut;
}

export function setGetParams(paramsIn: ConvParams) {
  const params = {};
  if (paramsIn.Team) { params.teamName = paramsIn.Team; }
  if (paramsIn.Tag) { params.search = paramsIn.Tag.join(', '); }
  if (paramsIn.DatePeriod) { params.startDate = formatISODate(paramsIn.DatePeriod.startDate); }
  if (paramsIn.DatePeriod) { params.endDate = formatISODate(paramsIn.DatePeriod.endDate); }
  if (paramsIn.Author) { params.author = paramsIn.Author; }

  logger.info(`Request ${JSON.stringify(params)}`);

  return decamelizeKeys(params);
}

export async function getImages(params: ConvParams): Promise<ResponseData> {
  const response: Response = await axios.get(getUrl, { params: setGetParams(params) });
  const responseData: any = camelizeKeys(response.data);
  return responseData;
}
