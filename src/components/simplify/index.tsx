import { default as classnames, default as classNames } from 'classnames'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import SimplifyItem from '../simplify_item'
import styles from './index.module.css'

const Simplify = () => {
  const list = [
    {
      img: '/img/simplify_add.svg',
      title: 'Build your portfolios',
      subTitle:
        'Define your budget, choose your cryptos, and allocate resources according to your preferences. Create a customizable crypto portfolio that you can track, and replicate it in seconds.',
      bgImg: '/img/simplify_bg_build.svg',
    },
    {
      img: '/img/simplify_search.svg',
      bgImg: '/img/simplify_bg_monitor.svg',
      title: 'Monitor your portfol',
      subTitle: 'Stay updated on your investment performance with our detailed portfolio insights.',
    },
    {
      img: '/img/simplify_control.svg',
      bgImg: '/img/simplify_bg_control.svg',
      title: 'Control your allocations',
      subTitle:
        'Easily add funds, adjust your allocations, or take profits with a single click. Shape your portfolios to match your vision.',
    },
    {
      img: '/img/simplify_interest.svg',
      bgImg: '/img/simplify_bg_interest.svg',
      title: 'Earn Interest (Coming Soon)',
      subTitle: 'Secure your cryptocurrencies and generate yield by leveraging leading platforms.',
    },
  ]
  const [selectedKey, setSelectedKey] = useState(list[0]?.title)
  const bgImg = useMemo(() => {
    return list.find((i) => i.title === selectedKey)?.bgImg ?? ''
  }, [selectedKey])
  return (
    <div className={classnames(styles.simplifyWrap, 'max-w-[1480px] m-auto')}>
      <div>
        <div className={classnames('mb-[26px] text-left', styles.moduleTitle)}>Simplifying portfolio management.</div>
        <div className={classnames('mb-[111px] text-left', styles.subTitle)}>
          No expertise required. Follow other traders, learn from them, and grow within the Neon community.
        </div>
      </div>
      <div className="flex gap-[37px]">
        <div className={classnames('flex gap-[19px] mb-[97px]  flex-col', styles.simplifyLeft)}>
          {list.map((i) => (
            <SimplifyItem {...i} key={i.title} setSelectedKey={setSelectedKey} isSelected={i.title === selectedKey} />
          ))}
        </div>
        <div>
          <Image alt="" className={styles.simplifyImage} width="985" height="612" src={bgImg} />
          <div className="flex flex-row justify-center gap-1.5 md:gap-2.5">
            {list.map((i) => (
              <div
                onClick={() => setSelectedKey(i.title)}
                className={classNames('w-2 cursor h-2 md:w-2.5 md:h-2.5 cursor-pointer rounded-full ', {
                  'bg-white': i.title !== selectedKey,
                  'bg-[#9183ff]': i.title === selectedKey,
                })}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Simplify
