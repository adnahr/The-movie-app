import TvShowType from './TvShowType';

export interface TvShowActionType {
	type: string;
	tvShows: TvShowType[];
}
