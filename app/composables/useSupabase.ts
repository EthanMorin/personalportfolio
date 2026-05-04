import type { SupabaseClient } from '@supabase/supabase-js';

export function useSupabase(): SupabaseClient {
	const client = useNuxtApp().$supabase;
	if (!client) {
		throw new Error(
			'Supabase is not configured. Add SUPABASE_URL and SUPABASE_KEY to .env.local.',
		);
	}
	return client;
}
