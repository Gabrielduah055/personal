import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';
import nodemailer from 'nodemailer';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

app.use(express.json());

/**
 * Contact form endpoint: Receives name, telephone, message and sends an email
 */
app.post('/api/contact', async (req, res) => {
  const { name, telephone, message } = req.body;
  if (!name || !telephone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Use your own Gmail credentials or an app password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_GMAIL_ADDRESS', // TODO: replace with sender Gmail
      pass: 'YOUR_GMAIL_PASSWORD_OR_APP_PASSWORD', // TODO: use app password if 2FA is enabled
    },
  });

  try {
    await transporter.sendMail({
      from: 'YOUR_GMAIL_ADDRESS', // TODO: replace
      to: 'gabriel.agyemanduah@st.vvu.edu.gh',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nTelephone: ${telephone}\nMessage: ${message}`,
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
