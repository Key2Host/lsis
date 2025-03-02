apt-get update -y
apt-get upgrade -y
apt-get install sudo curl nano git ca-certificates apt-transport-https lsb-release gnupg -y
rm -f /etc/apt/keyrings/docker.gpg
rm -f /etc/apt/sources.list.d/docker.list
mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install ufw fail2ban unattended-upgrades clamav clamav-daemon docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
dpkg-deb --build k2h
dpkg -i k2h.deb
apt-get install --fix-broken -y
