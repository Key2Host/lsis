FROM certbot/certbot

RUN mkdir -p /var/www/certbot
RUN certbot certonly --webroot -w /var/www/certbot -d "key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "www.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "saci.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "app.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "auth.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "help.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "jobs.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com
RUN certbot certonly --webroot -w /var/www/certbot -d "status.key2host.com" --non-interactive --agree-tos --email webmaster@key2host.com