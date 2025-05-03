FROM node:18

WORKDIR /app
COPY data/ .
WORKDIR /app/server
RUN rm -rf node_modules
RUN npm install --omit=dev
WORKDIR /app
CMD ["node", "server/index.mjs"]
