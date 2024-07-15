FROM nginx:1.25.4-alpine

COPY nginx.default.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 4000

COPY ./dist/ecommerce/browser /usr/share/nginx/html/ecommerce
