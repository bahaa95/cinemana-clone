import { IPerson as IPerson, TVideoItem } from '../../types';

export type Person = IPerson & { videos: TVideoItem[] };
