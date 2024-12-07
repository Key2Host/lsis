FROM nginx

RUN mkdir -p /etc/nginx/ssl
RUN mv cert.crt /etc/nginx/ssl/cert.crt
RUN mv cert.key /etc/nginx/ssl/cert.key
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY k2h.conf /etc/nginx/conf.d/k2h.conf