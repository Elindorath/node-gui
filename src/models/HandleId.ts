type handleGlobalIdParts = { nodeId: string; handleId: string | number };

const separator = '-';

export function makeHandleId({ nodeId, handleId }: handleGlobalIdParts) {
  return `${nodeId}${separator}${handleId}`;
}

export function parseHandleId(handleGlobalId: string) {
  const [nodeId, handleId] = handleGlobalId.split(separator);

  return { nodeId, handleId: parseInt(handleId) };
}
