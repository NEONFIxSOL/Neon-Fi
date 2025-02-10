import Blockchain from '@/components/blockchain'
import ConnectButton from '@/components/connect_button'
import Layout from '@/components/layout'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './page.module.css'
export default function Royalties() {
  return (
    <Layout title="Royalties">
      <div className="mt-[24px]">
        <Blockchain />
        <div className="mt-[36px] flex gap-[16px]">
          <div className={styles.left}>
            <Image alt="logo-img" className="" src="/img/royalties_img.svg" width="482" height="665" />
            <div className={classNames(styles.tokenWrap, 'flex items-end justify-between ')}>
              <div className={styles.token}>
                <p>Claimable royalties</p>
                <p>0 takens</p>
              </div>
              <ConnectButton></ConnectButton>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Claimable royalties</div>
            <div className={styles.doc}>Please connect your wallet</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
