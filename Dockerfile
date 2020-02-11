FROM node:10-alpine
RUN mkdir -p /home/node/apex/node_modules && chown -R node:node /home/node/apex
WORKDIR /home/node/apex
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
CMD ["node","app.js"]
