// eslint-disable-next-line
export { }

declare global {
  // eslint-disable-next-line
  interface Window {
    ethereum?: import('ethers').providers.ExternalProvider
  }
}
