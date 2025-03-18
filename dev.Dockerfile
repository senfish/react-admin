FROM node:18-alpine3.21 as build-stage
WORKDIR /app
COPY . .


FROM nginx:1.26.2-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/docker.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker build -f dev.Dockerfile -t react-admin .
# docker run -d -p 80:80 --name react-admin react-admin