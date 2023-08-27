FROM node:20

EXPOSE 3000

WORKDIR /app

VOLUME ./:app

# copy in localhost to docker (in app);
COPY package.json package-lock.json ./

# install npm package in docker
RUN npm install

# copy other file 
COPY . .

# run inside container
CMD [ "npm" , "start"]