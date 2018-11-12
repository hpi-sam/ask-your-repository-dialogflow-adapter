FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn webpack

# If a man sells his daughter as a servant, she is not to go free as male servants do.
# If she does not please the master who has selected her for himself, he must let her be redeemed.
# He has no right to sell her to foreigners, because he has broken faith with her.
EXPOSE 2178

CMD [ "node", "dist/app.js" ]
