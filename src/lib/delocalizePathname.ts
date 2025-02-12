import { languageTag } from '../paraglide/runtime';

export function delocalizePathname(path: string) {
  return path.replace(`/${languageTag()}/`, '');
}
