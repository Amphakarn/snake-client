const net = require('net');

const connect = function () {
  // Creates a TCP connection to port on host
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Successfully connected to game server: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: Bee');
  });

  // conn.on('connect', () => {
  //   for (let i = 0; i < 10; i++) {
  //     setTimeout(() => {
  //       conn.write('Move: up');
  //     }, i * 100);
  //   }  
  // });

  return conn;
}

module.exports = { connect };