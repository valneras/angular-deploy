FROM nginx:alpine
LABEL author="valneras"
COPY ./dist /usr/share/nginx/html
EXPOSE 80 443
#run nginx in foreground
ENTRYPOINT ["nginx","-g","daemon off;"]
