# FROM node:18-alpine3.14 as build-stage

# COPY package.json .
# RUN npm config set registry https://registry.npmmirror.com/
# RUN npm install
# COPY . .
# RUN npm run build

# 会生产dist目录，把dist目录copy到下一个阶段里面
# production stage
FROM nginx:stable as production-stage
WORKDIR /app

COPY /app/dist /usr/share/nginx/html
COPY /app/docker.nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



