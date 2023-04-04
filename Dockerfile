FROM node:16-alpine as builder

LABEL author="Dai Nguyen"
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build --prod --output-path=./dist

FROM nginx:1.21.3-alpine
LABEL author="Dai Nguyen"

# Copy custom nginx config
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]