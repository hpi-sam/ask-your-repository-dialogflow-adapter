// @flow
import logger from './logger';
import app from './app';

const port: number = 2178;

app.listen(port, () => {
  logger.info(`Esra is listening on port ${port}...`);
});
