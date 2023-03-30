import { axios } from 'src/lib/axios';
import { Video, VideoItem } from '../../types';

export const getVideo = async (
  _id: string
): Promise<{ video: Video; similarVideos: VideoItem[] }> => {
  const response = await axios.get<{ video: Video; similarVideos: VideoItem[] }>(
    `/video/_id/${_id}`
  );

  return response.data;
};
