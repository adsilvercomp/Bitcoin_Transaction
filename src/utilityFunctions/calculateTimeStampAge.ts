function calculateTimestampAge(timestamp: number, includeSeconds: boolean): string {
  const currentTime = new Date();
  const transactionTime = new Date(timestamp * 1000); // Convert timestamp to milliseconds

  const age = currentTime.getTime() - transactionTime.getTime();
  const hours = Math.floor(age / (1000 * 60 * 60));
  const minutes = Math.floor((age % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((age % (1000 * 60)) / 1000);

  if (includeSeconds) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else {
    return `${hours}h ${minutes}m`;
  }
}

export default calculateTimestampAge;
