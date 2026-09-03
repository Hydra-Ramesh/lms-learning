// Import NPM packages
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
// Create an instance of the Express application
const app = express()
// Get the port number from environment variables
const port = process.env.PORT;

// Write some routes for testing purposes
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/register', (req, res) => {
  res.send('Call Register Controller')
})

app.get('/login', (req, res) => {
  res.send('Call Login Controller')
})

app.get('/forgot-password', (req, res) => {
  res.send('Call Forgot Password Controller')
})

app.get('/profile', (req, res) => {
  res.send('Call Profile Controller')
})

app.get('/reset-password', (req, res) => {
  res.send('Call Reset Password Controller')
})

app.get('/update-profile', (req, res) => {
  res.send('Call Update Profile Controller')
})

app.get('/logout', (req, res) => {
  res.send('Call Logout Controller')
})

app.get('/send-email', (req, res) => {
  res.send('Call Send Email Controller')
})

app.get('/delete-account', (req, res) => {
  res.send('Call Delete Account Controller')
})

app.get('/delete-profile', (req, res) => {
  res.send('Call Delete Profile Controller')
})

app.get('/update-username', (req, res) => {
  res.send('Call Update Username Controller')
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})