FROM node:18.18.0 AS builder
RUN mkdir /usr/local/lovemedicineband
WORKDIR /usr/local/lovemedicineband
COPY package.json /usr/local/lovemedicineband/package.json
COPY public /usr/local/lovemedicineband/public
COPY src /usr/local/lovemedicineband/src
RUN npm install
# RUN node ./node_modules/node-sass-chokidar/bin/node-sass-chokidar /usr/local/chordpages/src/styles/styles.scss /usr/local/chordpages/public/styles.css
# ENV GENERATE_SOURCEMAP false
RUN npm run build

FROM nginx:1.25.3
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/local/lovemedicineband/build /usr/share/nginx/html

EXPOSE 80