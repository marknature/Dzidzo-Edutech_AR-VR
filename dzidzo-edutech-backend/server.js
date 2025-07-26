// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000; // You can define a PORT in your .env or it defaults to 3000

// Middleware to parse JSON request bodies
app.use(express.json());

// --- PostgreSQL Connection Pool Configuration ---
// Using the dzidzoMain1_POSTGRES_URL_NON_POOLING or dzidzoMain1_POSTGRES_URL
// For server-side applications, connection pooling is highly recommended for performance.
// Supabase provides poolers. It's often best to use the URL directly if it's set up for pooling.


const connectionString = process.env.dzidzoMain1_POSTGRES_URL_NON_POOLING;

if (!connectionString) {
    console.error("Error: dzidzoMain1_POSTGRES_URL_NON_POOLING is not defined in your .env file.");
    process.exit(1);
}

// Define the pool config object separately for inspection
const poolConfig = {
    connectionString: connectionString,
};

// --- ADD THESE DEBUGGING LINES ---
console.log('\n--- PostgreSQL Pool Configuration Being Used ---');
console.log(JSON.stringify(poolConfig, null, 2)); // Pretty print the object
console.log('--- End Pool Configuration ---');
// --- END DEBUGGING LINES ---

const pool = new Pool(poolConfig); // Pass the config object here

// Test database connection
pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL database (Supabase)');
        client.release();
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database:', err.message);
        console.error('Connection URL used:', connectionString);
        console.error('Please check your .env variables and network connectivity.');
        process.exit(1);
    });

// --- API Routes ---

// Basic welcome route
app.get('/', (req, res) => {
    res.send('Welcome to Dzidzo EduTech Backend API!');
});

// Example: Get all users from a 'users' table
// IMPORTANT: Replace 'users' with your actual table name if different.
// Ensure your database has a 'users' table for this to work.
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, username, email, created_at FROM users');
        res.json({
            status: 'success',
            data: result.rows
        });
    } catch (err) {
        console.error('Error fetching users:', err.message);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch users.',
            error: err.message
        });
    }
});

// Example: Create a new user
// This assumes you have columns like 'username' and 'email' in your 'users' table.
// IMPORTANT: Implement proper validation and error handling for production.
app.post('/api/users', async (req, res) => {
    const { username, email, password } = req.body; // Assuming password will be hashed on the server

    if (!username || !email || !password) {
        return res.status(400).json({
            status: 'error',
            message: 'Username, email, and password are required.'
        });
    }

    try {
        // In a real application, you would hash the password here (e.g., using bcrypt)
        // const hashedPassword = await bcrypt.hash(password, 10); // You'd need to install and import bcrypt

        const result = await pool.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
            [username, email, password] // Using plain password for demonstration, HASH THIS IN PRODUCTION!
        );

        res.status(201).json({
            status: 'success',
            message: 'User created successfully.',
            data: result.rows[0]
        });
    } catch (err) {
        console.error('Error creating user:', err.message);
        res.status(500).json({
            status: 'error',
            message: 'Failed to create user.',
            error: err.message
        });
    }
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    pool.end(() => {
        console.log('PostgreSQL connection pool closed.');
        process.exit(0);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Dzidzo EduTech backend listening on http://localhost:${PORT}`);
    console.log(`Current time (SAST): ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}`);
});
// Export the app for testing or further configuration
