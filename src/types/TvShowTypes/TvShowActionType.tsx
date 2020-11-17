import TvShowType from './TvShowType';

export default interface TvShowActionType {
  type: string;
  tvShows: TvShowType[];
}
