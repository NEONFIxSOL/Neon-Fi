'use client'
import ConnectButton from '@/components/connect_button'
import Layout from '@/components/layout'
import { useIsActive } from '@/hooks/use_wallet'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './page.module.css'
export default function Withdraw() {
  const isActive = useIsActive()
  return (
    <Layout title="Withdraw">
      <div className={styles.main}>
        <div className={classNames(styles.tips, 'flex items-center gap-[14px]')}>
          {!isActive ? (
            <>
              <Image alt="logo-img" className="" src="/img/information.svg" width="17" height="17" />
              Neon is now Mass, you can safely withdraw your funds from here.
            </>
          ) : (
            <>
              <Image alt="logo-img" className="" src="/img/connected.svg" width="17" height="17" />
              Your connection was successful.
            </>
          )}
        </div>
        <ConnectButton className={styles.connect}>Connect wallet</ConnectButton>
      </div>
    </Layout>
  )
}
