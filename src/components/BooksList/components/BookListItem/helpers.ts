import { map } from "lodash"

export const getPublisherInitials = (publisher: string) => {
  const items = map(publisher.split(' '), (word) => word[0].toUpperCase());
  return items.join('');
}