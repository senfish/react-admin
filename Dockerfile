FROM node:18-alpine3.21 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . ./

RUN npm run build

## production-stage 
FROM nginx:1.26.2-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/docker.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8001
CMD ["nginx", "-g", "daemon off;"]



