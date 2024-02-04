FROM node:20.9.0
RUN mkdir -p /app
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./ .
# RUN ln -sf /bin/bash /bin/sh
EXPOSE 3000
ENTRYPOINT ["sh","/app/docker-entrypoint.sh"]
