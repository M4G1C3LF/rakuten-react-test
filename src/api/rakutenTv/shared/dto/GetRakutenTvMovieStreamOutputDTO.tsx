export type GetRakutenTvMovieStreamOutputDTO = {
    data: {
        type: string;
        id: string;
        heartbeat: any;
        stream_infos: {
            player: string;
            display_aspect_ratio: string;
            active_aspect_ratio: string;
            all_subtitles: {}[];
            cdn: string;
            format_key: string;
            media_key: string;
            url: string;
            wrid: string;
            video_quality: string;
        }[]
    }
};