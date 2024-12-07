FROM node:18

WORKDIR /app
COPY data/package*.json ./
RUN npm install
COPY data/ .
CMD ["node", "server.js"]
