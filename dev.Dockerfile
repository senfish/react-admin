FROM node:18-alpine3.14

WORKDIR /app
COPY dist/* /app/dist
COPY docker.nginx.conf /app/docker.nginx.conf

# RUN ls  --progress=plain --no-cache
# COPY  /app/dist /usr/share/nginx/html
# COPY /app/docker.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



