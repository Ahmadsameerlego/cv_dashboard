// socket.js

import { io } from "socket.io-client";

const socket = io("https://cvbroadcast.com:4730", {
  reconnection: true,
  reconnectionAttempts: 5, // Number of attempts
  reconnectionDelay: 1000, // Delay in milliseconds between attempts
  transports: ['websocket']
});

export default socket;
