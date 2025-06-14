FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
# install postgres dependencies
RUN npm install  pg pg-hstore 
RUN npm install --only=production
ENV NODE_ENV=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]