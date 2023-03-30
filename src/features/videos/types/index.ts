import { File } from 'src/types';

export interface Video {
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
  mainCategory: Category;
  categories: Category[];
  actors: Person[];
  directors: Person[];
  writers: Person[];
  seasons?: Season[];
}

export interface Season {
  _id: string;
  season: number;
  episodes: Episode[];
}

export interface Episode {
  _id: string;
  episode: number;
  duration: number;
  video: string;
  image: File;
}

export interface Category {
  _id: string;
  title: string;
}

export interface Person {
  _id: string;
  name: string;
  image: File;
  roles: string[];
}

export type SpecialVideo = Pick<Video, '_id' | 'title' | 'description' | 'stars' | 'cover'>;

export type VideoItem = Pick<
  Video,
  '_id' | 'poster' | 'title' | 'stars' | 'mainCategory' | 'releaseDate'
>;

export interface Group {
  _id: string;
  title: string;
  videos: VideoItem[];
}
