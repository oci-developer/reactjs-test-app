FROM node:current-alpine as build

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80