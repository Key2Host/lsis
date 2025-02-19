function log(message, ...args) {
  const now = new Date().toLocaleString('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  let logMessage = `[${now}] ${message}`;

  if (args.length > 0) {
    const formattedArgs = args.map(arg =>
      arg instanceof Error ? `\n  ${arg.stack.replace(/\n/g, '\n  ')}` : `-> ${arg}`
    ).join('');
    logMessage += formattedArgs;
  }
  console.log(logMessage);
}

module.exports = { log };