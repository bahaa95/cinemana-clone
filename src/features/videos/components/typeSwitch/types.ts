import { Video } from '../../types';

export type TypeSwitchProps = {
  onChange: (type: Video['type']) => void;
  defaultType?: Video['type'];
};
