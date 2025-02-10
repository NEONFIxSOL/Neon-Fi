'use client'
import { chains } from '@/constants/chain'
import { useHome } from '@/hooks'
import { useChainId, useIsActive, useWallet } from '@/hooks/use_wallet'
import classNames from 'classnames'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useMemo } from 'react'
import ChainItem from '../chain_item'
import ConnectButton from '../connect_button'
import styles from './index.module.css'

function Item({ title, img, name }: { title: string; img: string; name: any }) {
  const pathname = usePathname()
  const router = useRouter()
  const isSelected = useMemo(() => pathname === '/' + name, [pathname, name])
  function toPath(name: 'withdraw' | 'royalties' | 'rewards') {
    router.push(`/${name}`)
  }
  return (
    <div
      onClick={() => toPath(name)}
      className={classNames('flex flex-col gap-[4px] items-center cursor-pointer  mb-[47px]', styles.item, {
        [styles.selected]: isSelected,
      })}
    >
      <Image alt="logo-img" className="" src={img} width="22" height="22" />
      <div className={styles.label}>{title}</div>
    </div>
  )
}
type IProps = FC<{ children: any; title: string }>
const Layout: IProps = ({ children, title }) => {
  const { toHome } = useHome()
  const isActive = useIsActive()
  const chainId = useChainId()
  const chain = chains.find((i) => i.id === chainId)
  const { connectWallet } = useWallet()
  const onSelect = (title: string) => {
    connectWallet(chains.find((i) => i.title === title)?.id as any)
  }
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className={classNames(styles.wrap, 'flex')}>
          <div className={classNames(styles.left, 'flex flex-col items-center ')}>
            <Image
              alt="logo-img"
              className="cursor-pointer mb-[96px]"
              src="/img/layout_logo.png"
              onClick={toHome}
              width="54"
              height="54"
            />
            {[
              {
                img: '/img/layout_withdraw.png',
                title: 'Withdraw',
                name: 'withdraw',
              },
              {
                img: '/img/layout_royalties.png',
                title: 'Royalties',
                name: 'royalties',
              },
              {
                img: '/img/layout_rewards.png',
                title: 'Rewards',
                name: 'rewards',
              },
            ].map((i) => (
              <Item {...i} key={i.name} />
            ))}
          </div>
          <div className={classNames(styles.right, 'flex-1 bg-[#1a1840]')}>
            <div className={classNames(styles.top, 'flex justify-end items-center pr-[15px] pt-[12px] mb-[60px] ')}>
              {isActive ? (
                <ConnectButton isShow>
                  <Image alt="logo-img" className="" src={chain?.icon ?? ''} width="20" height="14" /> Connected
                </ConnectButton>
              ) : (
                <ConnectButton></ConnectButton>
              )}
            </div>
            <div className={classNames('pl-[77px] pr-[77px] pb-[60px]', styles.content)}>
              <div className={styles.title}>{title}</div>
              <div>{children}</div>
            </div>
            <div className={styles.footer}>@2025-Neonfi-All Right Reserved</div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-white text-base-content min-h-full w-80 ">
          <div className="w-full pb-[20px] pt-[14px] border-b border-greyblue-50 flex flex-row justify-between bg-white items-center text-darkblue-900 mb-[20px]">
            <span></span>
            <span data-cy="sidebar-title" className="font-bold text-xl">
              Select a network
            </span>
            <svg
              viewBox="0 0 16 16"
              data-cy="select-a-network-sidebar-close-button"
              className="fill-current w-[18px] h-[18px] cursor-pointer"
            >
              <defs>
                <filter id="a">
                  <feColorMatrix
                    in="SourceGraphic"
                    values="0 0 0 0 0.588235 0 0 0 0 0.623529 0 0 0 0 0.725490 0 0 0 1.000000 0"
                  ></feColorMatrix>
                </filter>
              </defs>
              <g transform="translate(-405 -459)" fillRule="evenodd">
                <g fillRule="nonzero">
                  <path d="M405.78 475a.78.78 0 01-.55-1.33l14.44-14.44a.78.78 0 111.1 1.1l-14.44 14.44a.78.78 0 01-.55.23z"></path>
                  <path d="M420.22 475c-.2 0-.4-.08-.55-.23l-14.44-14.44a.78.78 0 011.1-1.1l14.44 14.44a.78.78 0 01-.55 1.33z"></path>
                </g>
              </g>
            </svg>
          </div>
          {/* Sidebar content here */}
          {chains.map((i) => (
            <ChainItem {...i} key={i.title} onSelect={onSelect} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Layout
