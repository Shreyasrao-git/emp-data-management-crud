FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
COPY . .
EXPOSE 4200
RUN npm run build
CMD ["npm","start"]
