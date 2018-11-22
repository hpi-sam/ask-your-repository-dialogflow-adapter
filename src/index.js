// @flow
import logger from './logger';
import app from './app';

const port: number = 2178;

app.listen(port, () => {
  logger.info(`Tobito is listening on port ${port}...`);
});
