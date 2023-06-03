import { axios } from 'src/lib/axios';
import { IVideo, TVideoItem } from '../../types';

export const getVideo = async (
  _id: string
): Promise<{ video: IVideo; similarVideos: TVideoItem[] }> => {
  const response = await axios.get<{ video: IVideo; similarVideos: TVideoItem[] }>(
    `/video/_id/${_id}`
  );

  return response.data;
};
