FROM nginx

RUN mkdir -p /etc/nginx/ssl
COPY cert.crt /etc/nginx/ssl/cert.crt
COPY cert.key /etc/nginx/ssl/cert.key
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY security_k2h.conf /etc/nginx/snippets/security_k2h.conf
COPY k2h.conf /etc/nginx/conf.d/k2h.conf