import { Nullable } from 'src/types';
import { SearchQuery } from '../../pages/search';

export function serializeFormQuery(query: Nullable<SearchQuery>) {
  const { title, type, category, stars } = query;
  let queryObj: Partial<SearchQuery> = {};

  if (title) {
    queryObj = { ...queryObj, title };
  }

  if (type) {
    queryObj = { ...queryObj, type };
  }

  if (category) {
    queryObj = { ...queryObj, category };
  }

  if (stars) {
    queryObj = { ...queryObj, stars };
  }

  return queryObj;
}
