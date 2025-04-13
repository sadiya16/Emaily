import express from  'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './models/Users.js';
import './services/passport.js'
import keys from './config/keys.js';
import appRoutes from './routes/authRoutes.js'

mongoose.connect(keys.mongoURI);
const app = express();
app.use(
    cookieSession({
        maxAge:30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Use Imported Routes
app.use('/', appRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT);