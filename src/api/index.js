import { get, post } from './http';
import { stringifyQuery } from '../util';

const BASE = 'https://cnodejs.org/api/v1';

export const topicList = params => {
  return get(`${BASE}/topics${stringifyQuery(params)}`);
};

export const topicDetail = topicId => {
  return get(`${BASE}/topic/${topicId}`);
};

export const createTopic = params => {
  return post(`${BASE}/topics`, params);
};

export const updateTopic = params => {
  return post(`${BASE}/topics/update`, params);
};

export const userDetail = userLoginName => {
  return get(`${BASE}/user/${userLoginName}`);
};
