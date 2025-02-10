import { getAddChainParameters } from '@/constants/chains'
import { closeDrawer } from '@/utils'
import { useCallback, useEffect, useState } from 'react'
import { metaMask as connector, hooks } from './metaMask'
export const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export const useWallet = () => {
  const activeChainId = useChainId()
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [, setError] = useState(undefined)
  const [, setDesiredChainId] = useState<number>()

  const switchChain = useCallback(
    async (desiredChainId: number) => {
      setDesiredChainId(desiredChainId)

      try {
        if (
          // If we're already connected to the desired chain, return
          desiredChainId === activeChainId ||
          // If they want to connect to the default chain and we're already connected, return
          (desiredChainId === -1 && activeChainId !== undefined)
        ) {
          setError(undefined)
          return
        }

        await connector.activate(getAddChainParameters(desiredChainId))
        closeDrawer()

        setError(undefined)
      } catch (error) {
        setError(error as any)
      }
    },
    [connector, activeChainId, setError]
  )
  // attempt to connect eagerly on mount
  useEffect(() => {
    void connector.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, [])
  return { ENSNames, activeChainId, accounts, isActivating, isActive, connectWallet: switchChain }
}
