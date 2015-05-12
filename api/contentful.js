
import contentful from 'contentful';

var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

var syncToken;
client.sync({initial: true}).then(d => syncToken = d.nextSyncToken);

export default client;

