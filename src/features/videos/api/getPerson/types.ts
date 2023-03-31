import { Person as IPerson, VideoItem } from '../../types';

export type Person = IPerson & { videos: VideoItem[] };
