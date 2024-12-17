FROM node:18-alpine3.14

WORKDIR /app
COPY . .
COPY  /app/dist /usr/share/nginx/html
COPY /app/docker.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



