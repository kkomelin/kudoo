import knex from './knex';

export async function healthCheckQuery(): Promise<any> {
  return await knex.raw('select 1+1 as result');
}
