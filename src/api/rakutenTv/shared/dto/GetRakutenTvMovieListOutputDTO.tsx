export interface GetRakutenTvMovieListOutputDTO {
	data: {
		type: string;
		id: string;
		numerical_id: number;
		category: string;
		short_name: string;
		content_type: string;
		is_b2b: boolean;
		wktv_code: string;
		only_coupon: boolean;
		is_promotional: boolean;
		b2b_button_text: string;
		is_recomendation: boolean;
		name: string;
		additional_images: string[];
		kind: string;
		contents: {
			data: {
				type: string;
				id: string;
				numerical_id: number;
				title: string;
				short_plot: string;
				year: number;
				duration: number;
				label: string;
				classification: {
					type: string;
					id: string;
					numerical_id: number;
					name: string;
					age: number;
					adult: boolean;
					description: string;
				};
				images: {
					artwork: string;
					standard_artwork: string;
					ribbon: string;
					snapshot: string;
					has_sponsored_snapshot: boolean;
				};
				highlighted_score: {
					score: number;
					amount_of_votes: number;
					formatted_amount_of_votes: string;
					site: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						show_image: boolean;
						scale: number;
						image: string;
					};
				};
				rating: {
					average: number;
					scale: number;
				};
				labels: {
					audio_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					hdr_types: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					purchase_types: {
						type: string;
						id: string;
						numerical_id: number;
						is_recurring: boolean;
						name: string;
						label: string;
						kind: string;
						expires_after_in_seconds: number;
						available_time_in_seconds: number;
					}[];
					video_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						position: number;
						image: string;
					}[];
				};

				
			}[]
		};
		meta: {
			pagination: {
				page: number;
				count: number;
				per_page: number;
				offset: number;
				total_pages: number;
			};
		};
	};
}