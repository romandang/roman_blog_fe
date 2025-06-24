FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json .

ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=http://ec2-54-209-224-117.compute-1.amazonaws.com:3001

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
