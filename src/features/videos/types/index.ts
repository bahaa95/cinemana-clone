import { File } from 'src/types';

export interface IVideo {
  _id: string;
  isPublic: boolean;
  title: string;
  description: string;
  type: 'movie' | 'series';
  stars: number;
  releaseDate: Date;
  uploadDate: Date;
  poster: File;
  cover: File;
  isSpecial: boolean;
  specialExpire: Date;
  triler: string;
  video?: string;
  mainCategory: ICategory;
  categories: ICategory[];
  actors: IPerson[];
  directors: IPerson[];
  writers: IPerson[];
  seasons?: ISeason[];
}

export interface ISeason {
  _id: string;
  season: number;
  episodes: IEpisode[];
}

export interface IEpisode {
  _id: string;
  episode: number;
  duration: number;
  video: string;
  image: File;
}

export interface ICategory {
  _id: string;
  title: string;
}

export interface IPerson {
  _id: string;
  name: string;
  image: File;
  roles: string[];
}

export type TSpecialVideo = Pick<IVideo, '_id' | 'title' | 'description' | 'stars' | 'cover'>;

export type TVideoItem = Pick<
  IVideo,
  '_id' | 'poster' | 'title' | 'stars' | 'mainCategory' | 'releaseDate'
>;

export interface IGroup {
  _id: string;
  title: string;
  videos: TVideoItem[];
}

export interface IHistory {
  _id: string;
  watchList: boolean;
  favorite: boolean;
}
