dpkg-deb --build k2h
dpkg -i k2h.deb
apt-get install --fix-broken -y
