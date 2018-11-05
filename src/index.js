// @flow
import logger from './logger';
import app from './app';

const port: number = 4822;

app.listen(port, () => {
  logger.info(`Esra is listening on port ${port}...`);
});
