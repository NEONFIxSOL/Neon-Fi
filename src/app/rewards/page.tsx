import ConnectButton from '@/components/connect_button'
import Layout from '@/components/layout'
import styles from './page.module.css'
export default function Rewards() {
  return (
    <Layout title="Rewards">
      <div className={styles.main}>
        <ConnectButton className={styles.connect}>Connect wallet</ConnectButton>
      </div>
    </Layout>
  )
}
