'use client'

import DefiItem from '@/components/defi_item'
import Fresh from '@/components/fresh'
import Simplify from '@/components/simplify'
import classNames, { default as classnames } from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import styles from './home.module.css'
function StartBtn() {
  const router = useRouter()

  const toStart = () => {
    router.push('/withdraw')
  }
  return (
    <button className={styles.startBtn} onClick={toStart}>
      Start investing
    </button>
  )
}

function FAQItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="mb-[35px]">
      <div className="flex justify-between items-center cursor-pointer h-[60px]" onClick={() => setIsOpen((i) => !i)}>
        <div>{title}</div>
        <Image alt="" src="/img/plus.svg" width={18} height={18} />
      </div>
      <div
        className={classNames(
          { [styles['animate-collapse']]: !isOpen, [styles['animate-expand']]: isOpen },
          'whitespace-pre-line text-gray-400 overflow-hidden'
        )}
      >
        {content}
      </div>
    </div>
  )
}

export default function Home() {
  const width = useMemo(() => 483, [])
  const toGithub = () => {
    window.open('https://github.com/NEONFIxSOL/Neon-Fi')
  }
  const toGitBook = () => {
    window.open('https://neonfi.gitbook.io/neonfi')
  }

  const toX = () => {
    window.open('https://x.com/NeonFixSOL')
  }
  const toTerms = () => {
    window.open('https://neonfi.gitbook.io/neonfi/other/terms-and-conditions')
  }
  const toPrivacy = () => {
    window.open('https://neonfi.gitbook.io/neonfi/other/terms-and-conditions#privacy')
  }
  return (
    <div className={styles.page_home}>
      <div className={styles.main}>
        {/* header */}
        <div className={classnames('flex items-center justify-between pt-[2px]', styles.header)}>
          <div className={classnames('flex  items-center ', styles.logoWrap)}>
            <Image alt="logo-img" className="" src="/favicon.ico" width="54" height="54" />
            <span className={styles.logo_text}>Neon</span>
          </div>
          <div className="flex ">
            <div className={classnames('flex ', styles.btn_wrap)}>
              <button className={styles.btn} onClick={toX}>
                Twitter
              </button>
              <button className={styles.btn} onClick={toGitBook}>
                Gitbook
              </button>
              <button className={styles.btn} onClick={toGithub}>
                GitHub
              </button>
            </div>
            <StartBtn />
          </div>
        </div>
        {/* banner */}
        <div className={'banner'}>
          <Image alt="" className={styles.bannerImage} fill src="/img/banner.jpg?t=1" style={{ objectFit: 'cover' }} />
        </div>
        {/* over 3000 */}
        <div className={classnames('flex items-center', styles.over300)}>
          <div className={classnames('text-center mb-[35px]', styles.moduleTitle)}>
            Over 30,000 portfolios already created.
          </div>
          <div className={classnames('mb-[67px] text-center', styles.subTitle)}>
            Explore users' portfolios in the browser and replicate the ones that inspire you.
          </div>
          <div className="flex gap-[24px] mb-[197px]">
            <Image className={styles.box} alt="" width={width} height="314" src="/img/create_a.png?t=1" />
            <Image className={styles.box} alt="" width={width} height="314" src="/img/create_b.png?t=1" />
            <Image className={styles.box} alt="" width={width} height="314" src="/img/create_c.png?t=1" />
          </div>
        </div>
        {/* simplify */}
        <Simplify />
        {/* fresh */}
        <Fresh />
        {/* earn */}
        <div className={styles.earnWrap}>
          <Image alt="" className="" src="/img/earn_bg.svg" fill style={{ objectFit: 'cover' }} />
          <div className={classnames('', styles.earnContent)}>
            <div className={styles.title}>Earn Royalties</div>
            <div className={classnames(styles.subTitle)}>
              Receive rewards whenever others copy your trades, as well as throughout the entire journey of your
              portfolio.
            </div>
          </div>
        </div>
        {/* defi */}
        <div className={classnames(styles.defiWrap, '')}>
          <div className="text-center">
            <div className={classnames('mb-[35px]', styles.moduleTitle)}>In DeFi we trust!</div>
            <div className={classnames('mb-[58px]', styles.subTitle)}>
              Experience the full power of decentralized finance in a safe and secure environment.
            </div>
          </div>
          <div className={classnames('flex justify-center gap-[28px]')}>
            {[
              {
                img: '/img/defi_a.svg',
                title: 'Non-Custodial Platform',
                subTitle:
                  'Utilize a platform where you maintain full control over your assets – no one else can freeze or seize them.',
              },
              {
                img: '/img/defi_b.svg',
                title: 'Your funds, your decisions',
                subTitle: 'The responsibility for your investment rests solely with you – you call the shots.',
              },
              {
                img: '/img/defi_c.svg',
                title: 'Multiple security audits',
                subTitle:
                  'Neon smart contracts are systematically audited by the best security experts in the industry.',
              },
              {
                img: '/img/defi_d.svg',
                title: 'Cover your cryptos',
                subTitle: 'Your funds are covered by Nexus Mutual insurance.',
              },
            ].map((i, idx) => (
              <DefiItem idx={idx} style={idx === 1 ? { flex: '0 0 374px' } : {}} {...i} key={i.title} />
            ))}
          </div>
        </div>
        {/* join */}
        <div className={classnames(styles.joinWrap, 'flex gap-[67px] pl-[194px]')}>
          <div className="">
            <div className={classnames('mb-[72px] w-[537px]', styles.title)}>Join thousands of crypto investors</div>
            <StartBtn />
          </div>
          <div className={classnames('flex justify-center gap-[28px]')}>
            <Image alt="logo-img" className="" src="/img/img_humor.svg" width="928" height="335" />
          </div>
        </div>
        {/* faq */}
        <div className={classnames(styles.powerWrap)} style={{ padding: '0 194px' }}>
          <div className={classnames('mb-[86px] text-center', styles.moduleTitle)}>The power of knowled</div>
          {/* FAQ */}
          <div className={classnames('flex justify-between mb-[40px]')}>
            <div className={styles.moduleTitle} style={{ fontSize: 26, lineHeight: '22px' }}>
              FAQ
            </div>
            <div className={styles.view}>View our documentation</div>
          </div>
          {[
            {
              title: 'What do I need to do to connect?',
              content: `If you read this text, you have everything needed to start using Neon: an internet connection and a computer/phone.

You can either link your email address/phone number/social networks or connect with your existing web3 wallet - Metamask, Coinbase Wallet, etc.

Do not share your secret passphrase or private key of your web3 wallet with anyone, as you could permanently lose your funds.`,
            },
            {
              title: 'Can I buy crypto with fiat currencies ($, €, £, etc.) on Neon?',
              content: `Yes.

You can instantly buy cryptocurrencies by card or bank transfer.`,
            },
          ].map((i) => (
            <FAQItem {...i} key={i.title} />
          ))}
          <div className="flex justify-between mb-[32px]">
            <div className="flex gap-[32px]">
              <Image
                className="cursor-pointer"
                alt=""
                src="/img/faq_twitter.svg"
                onClick={toX}
                width={91}
                height={91}
              />
              <Image
                className="cursor-pointer"
                alt=""
                src="/img/faq_github.svg"
                onClick={toGithub}
                width={91}
                height={91}
              />
              <Image
                className="cursor-pointer"
                alt=""
                src="/img/faq_gitbook.png"
                onClick={toGitBook}
                width={91}
                height={91}
              />
            </div>
            <div className={styles.stayTitle}>
              <Image alt="" src="/img/Stay_Tuned.png" width={453} height={91} />
            </div>
          </div>
          <div className="footer flex justify-between items-center">
            <Image alt="" src="/logo_fi.png" width={236} height={76} />
            <div>© 2025 - Neon - All Right Reserved</div>
            <div>
              <span onClick={toTerms} className="cursor-pointer underline">
                Terms & conditions
              </span>
              &nbsp; &nbsp;
              <span onClick={toPrivacy} className="cursor-pointer underline">
                Privacy policies
              </span>
            </div>
          </div>
          <div className="h-[48px]"></div>
        </div>
      </div>
    </div>
  )
}
