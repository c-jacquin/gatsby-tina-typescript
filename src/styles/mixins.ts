import { dimensions } from './theme';

const getEmSize = (size: number): number => size / dimensions.fontSize.regular;

export default getEmSize;
