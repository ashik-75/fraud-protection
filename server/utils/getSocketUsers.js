export async function getSocketUsers(io) {
  const browserSignatures = [];
  for (let [id, socket] of io.of("/").sockets) {
    browserSignatures.push({
      browserSignature: socket.handshake.auth.browserSignature,
      id: id,
    });
  }
  return browserSignatures;
}
