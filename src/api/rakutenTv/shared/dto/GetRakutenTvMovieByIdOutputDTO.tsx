
export interface GetRakutenTvMovieByIdOutputDTO {
	meta: {
		rights: any[];
		heartbeats: any[];
		already_seens: any[];
		wishlist: any[];
		order_options: {
			id: number;
			price: string;
			paying: {
				in_currency: string;
				in_points: number;
				points_in_currency: string;
				reward_in_points: number;
				rewarded_points_expiration_date: string;
			}
		}[];
		warnings: any[];		
	};
	data: {
		type: string;
		id: string;
		numerical_id: number;
		title: string;
		original_title: string;
		year: number;
		short_plot: string;
		plot: string;
		duration: number;
		highlight: string;
		duration_in_seconds: number;
		ultraviolet_enabled: boolean;
		groups: any[];
		availabilities: any[];
		actors: {
			type: string;
			id: string;
			numerical_id: number;
			photo: string;
			name: string;
			born_at: string;
		}[];
		awards: {
			type: string;
			id: string;
			numerical_id: number;
			name: string;
			description: string;
			year: number;
			category: string;
			result: string;
			veredict: {
				name: string;
				localized_name: string;
			};
			photo: string;
		}[];
		classification: {
			type: string;
			id: string;
			numerical_id: number;
			name: string;
			age: number;
			adult: boolean;
			description: string;
			default: boolean;
		};
		countries: {
			type: string;
			id: string;
			numerical_id: number;
			name: string;
		}[];
		extras: any[];
		directors: {
			type: string;
			id: string;
			numerical_id: number;
			photo: string;
			name: string;
			born_at: string;
		}[];
		genres: {
			type: string;
			id: string;
			numerical_id: number;
			name: string;
			adult: boolean;
			erotic: boolean;
			kids: boolean;
			additional_images: {
				icon: string;
				artwork: string;
			};
		}[];
		images: {
			artwork: string;
			standard_artwork: string;
			snapshot: string;
			has_sponsored_snapshot: boolean;
			ribbons: {
				type: string;
				id: string;
				numerical_id: number;
				name: string;
				color: string;
				text_color: string;
				position: string;
				localized_name: string;
				image: string;
			}[]
		};
		offline_enabled_for_est: boolean;
		offline_enabled_for_rent: boolean;
		offline_enabled_for_svod: boolean;
		order_options: {
			type: string;
			id: string;
			numerical_id: number;
			legacy_instance_type: string;	
			legacy_instance_id: string;	
			periodic_points_reward_amount: number;
			price: string;
			price_without_currency: number;
			points: {
				cost: number;
				reward: number;
			};
			purchase_type: {
				type: string;
				id: string;
				numerical_id: number;
				is_recurring: boolean;
				name: string;
				label: string;
				kind: string;
				expire_after_in_seconds: number;
				available_time_in_seconds: number;
			}
		}[];
		packs: any[];
		rating: {
			average: number;
			scale: number;
		};
		critic_reviews: {};
		user_reviews: {};
		scores: {
			type: string;
			id: string;
			numerical_id: number;
			href: string;
			amount_of_votes: number;
			formatted_amount_of_votes: string;
			score: number;
			highlighted: boolean;
			site: {
				type: string;
				id: string;
				numerical_id: number;
				name: string;
				show_image: boolean;
				scale: number;
				image: string;
			}
		}[];
		subcription_plans: any[];
		svod_schedules: any[];
		tags: {
			type: string;
			id: string;
			numerical_id: number;
			name: string;
		}[];
		view_options: {
			support: {
				audio_qualities: {
					type: string;
					id: string;
					numerical_id: number;
					name: string;
					abbr: string;
					image: string;
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
				hdr_types: {
					type: string;
					id: string;
					numerical_id: number;
					name: string;
					abbr: string;
					image: string;
				}[];
			};
			public: {
				trailers: {
					hdr_types: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					streaming_drm_types: {
						type: string;
						id: string;
					}[];
					audio_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					subtitle_languages: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
					}[];
					video_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						position: number;
						abbr: string;
						image: string;
					}[];
					audio_languages: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
					}[]
				}[];
				previews: any[];
				adverts: any[];
			};
			private: {
				streams: {
					hdr_types: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					streaming_drm_types: {
						type: string;
						id: string;
					}[];
					audio_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					subtitle_languages: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
					}[];
					video_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						position: number;
						abbr: string;
						image: string;
					}[];
					audio_languages: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
					}[];
				}[];
				offline_streams: {
					hdr_types: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					streaming_drm_types: {
						type: string;
						id: string;
					}[];
					audio_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
						image: string;
					}[];
					subtitle_languages: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
					}[];
					video_qualities: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						position: number;
						abbr: string;
						image: string;
					}[];
					audio_languages: {
						type: string;
						id: string;
						numerical_id: number;
						name: string;
						abbr: string;
					}[];

				}[]
			}
		}
		additional_images: any;
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
				price: string;
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
		}
	}		
}