import { DataStore, Record, Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';
// Import mappers
import { SongMapper } from './mappers/song.mapper';

export const adapter = new HttpAdapter({
    basePath: '/api'
});

export const store = new DataStore();

store.registerAdapter('http', adapter, { default: true });

export interface ISong extends Record {
    name: string
}

export interface ISongMapper extends Mapper {

}

store.defineMapper('song')