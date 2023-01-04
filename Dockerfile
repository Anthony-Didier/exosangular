# step 1
FROM node:16.13.1-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
COPY . .
RUN npm run build
#step 2
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html