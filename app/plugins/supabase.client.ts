import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const url = config.public.supabaseUrl as string | undefined;
	const key = config.public.supabaseKey as string | undefined;

	if (!url || !key) {
		if (import.meta.dev) {
			console.warn(
				'[supabase] Set SUPABASE_URL and SUPABASE_KEY in .env.local',
			);
		}
		return {
			provide: {
				supabase: null,
			},
		};
	}

	const supabase = createClient(url, key);

	return {
		provide: {
			supabase,
		},
	};
});
