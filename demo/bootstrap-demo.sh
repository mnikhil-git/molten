#!/usr/bin/env bash
echo "deb http://repo.saltstack.com/apt/debian jessie contrib" > /etc/apt/sources.list.d/salt.list
wget -q -O- "https://repo.saltstack.com/apt/debian/SALTSTACK-GPG-KEY.pub" | apt-key add -
sudo apt-get update
sudo apt-get install -y salt-master salt-api salt-minion
cp /vagrant/demo/salt/master/custom.conf /etc/salt/master.d/
cp /vagrant/demo/salt/minion/custom.conf /etc/salt/minion.d/
service salt-master stop
service salt-minion stop
service salt-api stop
service salt-api stop
service salt-master start
service salt-minion start
service salt-api start
sleep 5
salt-key -y -a themaster
sleep 5
salt-key -L
salt '*' test.ping
useradd test
echo test:molten | chpasswd
cd /
curl -s -L https://github.com/martinhoefling/molten/releases/download/v0.1.0/molten-0.1.0.tar.gz | tar -xz
mv molten-* molten
echo "You can now connect to http://192.168.42.43:8000/molten as user test / molten"
