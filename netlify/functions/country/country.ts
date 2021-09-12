import { Handler } from '@netlify/functions'
import { gql, request } from 'graphql-request'

const endpoint = 'https://countries.trevorblades.com/'

export const handler: Handler = async (event, context) => {
  const country = event.headers['x-country'] || 'US'
  const query = gql`{
    country(code: "${country}") {
      name, emoji
    }
  }`

  const result = await request(endpoint, query)

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {"Content-Type": "application/json"}
  }
}
