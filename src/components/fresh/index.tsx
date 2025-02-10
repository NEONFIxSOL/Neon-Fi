import classnames from 'classnames'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import SimplifyItem from '../simplify_item'
import styles from './index.module.css'

const Fresh = () => {
  const list = [
    {
      img: '/img/fresh_copy.svg',
      bgImg: '/img/fresh_bg_copy.svg',
      title: 'Copy Portfolios',
      subTitle:
        "Allocate a budget and mimic the investment choices of other users. You're just one step from making your initial foray into crypto investment.",
    },
    {
      img: '/img/fresh_stay.svg',
      bgImg: '/img/fresh_bg_stay.svg',
      title: 'Stay Informed on Your Copies',
      subTitle:
        "Get instant alerts for any modifications in the portfolio you've replicated. Review all changes and choose whether to implement them or not.",
    },
    {
      img: '/img/fresh_share.svg',
      bgImg: '/img/fresh_bg_share.svg',
      title: 'Share Your Investment Strategies',
      subTitle:
        'Send a snapshot of your portfolio to friends, family, or your network, allowing them to replicate your investments with just one click.',
    },
    {
      img: '/img/fresh_trading.svg',
      bgImg: '/img/fresh_bg_follow.svg',
      title: 'Follow other traders',
      subTitle:
        'Explore the profiles and track records of other users. Follow the ones that impress you the most and get notifications about their trades.',
    },
  ]
  const [selectedKey, setSelectedKey] = useState(list[0]?.title)
  const bgImg = useMemo(() => {
    return list.find((i) => i.title === selectedKey)?.bgImg ?? ''
  }, [selectedKey])
  return (
    <div className={classnames(styles.freshWrap, 'max-w-[1480px] m-auto')}>
      <div className="flex flex-col justify-end items-end pr-[220px]">
        <div className={classnames('mb-[26px] text-center', styles.moduleTitle)}>
          A fresh approach to social trading.
        </div>
        <div className={classnames('mb-[111px] w-[1036px] text-right', styles.subTitle)}>
          Become part of the biggest crypto community, gain knowledge from fellow investors, or demonstrate your skills
          in crafting top-performing strategies.
        </div>
      </div>
      <div className="flex gap-[37px]">
        <div>
          <Image alt="" className={styles.simplifyImage} width="888" height="551" src={bgImg} />
          <div className="flex flex-row justify-center gap-1.5 md:gap-2.5">
            {list.map((i) => (
              <div
                onClick={() => setSelectedKey(i.title)}
                className={classnames('w-2 cursor h-2 md:w-2.5 md:h-2.5 cursor-pointer rounded-full ', {
                  'bg-white': i.title !== selectedKey,
                  'bg-[#9183ff]': i.title === selectedKey,
                })}
              ></div>
            ))}
          </div>
        </div>
        <div className={classnames('flex gap-[28px] mb-[97px]  flex-col', styles.freshRight)}>
          {list.map((i) => (
            <SimplifyItem
              {...i}
              key={i.title}
              subTitleClassName="mb-[18px]"
              setSelectedKey={setSelectedKey}
              isSelected={i.title === selectedKey}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Fresh
