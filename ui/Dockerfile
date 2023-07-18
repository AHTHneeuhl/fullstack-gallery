FROM node:18-alpine

# set working directory
WORKDIR /app

# expose port
EXPOSE 3000

# copy package.json and yarn.lock
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install --silent

# copy app
COPY . ./

CMD [ "yarn", "start" ]