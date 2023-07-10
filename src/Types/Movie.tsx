import { Genre } from "./Genre";
import { StaffMember } from "./StaffMember";

export type Movie = {
    title?: string;
    screenshotUrl?: string;
    description?: string;
    releaseYear?: number;
    duration?: number;
    scores?: {
        imdb: number;
        tmdb: number;
    };
    staff?: StaffMember[];
    genres?: Genre[];
    languages?: string[];
    subtitles?: string[];
    classification: number;
    videoQualities?: string[];
    audioQualities?: string[];
}