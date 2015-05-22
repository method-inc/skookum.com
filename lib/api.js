/** @flow */

export default function(path: string, options: object): Promise {
  return fetch(
    `${process.env.API_URL}/api/${path}`,
    options
  ).then(n => n.json());
}

