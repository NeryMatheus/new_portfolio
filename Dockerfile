FROM node:18-alpine as BUILD

WORKDIR /new_portfolio/

COPY public/ /new_portfolio/public/
COPY src/ /new_portfolio/src/
COPY package.json /new_portfolio/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["yarn", "start"]