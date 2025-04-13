import express from 'express';
import passport from 'passport';

const app = express(); // Initialize Express app

// Google Authentication Routes
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/' // Redirect here on authentication failure
}), (req, res) => {
    res.redirect('/dashboard'); // Redirect after successful login
});

app.get('/api/logout', (req, res)=>{
    req.logOut();
    res.send(req.user);

});
app.get('/api/current_user', (req, res)=>{
    res.send(req.user);
});

export default app;
