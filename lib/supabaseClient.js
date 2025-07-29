        import { createPool } from '@vercel/postgres';
        import { POSTGRES_URL } from '$env/static/private'; // Example for SvelteKit

        const pool = createPool({
          connectionString: POSTGRES_URL
        });
