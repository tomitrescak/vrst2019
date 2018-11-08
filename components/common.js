export function makeUrl(url) {
  return process.env.NODE_ENV === 'production' ? '/vrst2019' + url : url;
}
