import crypto from 'crypto'

const SALT = '__celo__'
export function obfuscateNumberForMatchmaking(e164Number: string) {
  return crypto
    .createHash('sha256')
    .update(e164Number + SALT)
    .digest('base64')
}

const PEPPER_CHAR_LENGTH = 13
export function getPepperFromThresholdSignature(sigBuf: Buffer) {
  // Currently uses 13 chars for a 78 bit pepper
  return crypto
    .createHash('sha256')
    .update(sigBuf)
    .digest('base64')
    .slice(0, PEPPER_CHAR_LENGTH)
}

enum AuthenticationMethod {
  WALLET_KEY = 'wallet_key',
  ENCRYPTION_KEY = 'encryption_key',
}

export const GenesisBlockUtils = jest.fn()
GenesisBlockUtils.getGenesisBlockAsync = jest.fn()
GenesisBlockUtils.getChainIdFromGenesis = jest.fn()

export const StaticNodeUtils = jest.fn().mockImplementation()
StaticNodeUtils.getStaticNodesAsync = jest.fn()
StaticNodeUtils.getStaticNodesGoogleStorageBucketName = jest.fn()
