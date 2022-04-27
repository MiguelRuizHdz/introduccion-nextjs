FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Cambiar USER de root a prod-nextjs para limitar permisos 

EXPOSE 3000

CMD [ "npm", "run", "start" ]