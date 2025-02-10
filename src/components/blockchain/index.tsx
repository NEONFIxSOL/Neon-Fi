'use client'
import { chains } from '@/constants/chain'
import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import styles from './index.module.css'

function Item({
  title,
  icon,
  onSelect,
  isSelected,
}: {
  title: string
  icon: string
  onSelect: (title: string) => void
  isSelected?: boolean
}) {
  return (
    <div
      onClick={() => onSelect?.(title)}
      className={classNames(styles.chainItem, 'flex cursor-pointer gap-[5px] items-center ', {
        grayscale: !isSelected,
      })}
    >
      <Image alt="logo-img" className="" src={icon} width="14" height="14" />
      <div className={styles.label}>{title}</div>
    </div>
  )
}
const Blockchain = () => {
  const [selectedKey, setSelectedKey] = useState('Arbitrum')
  function onSelect(key: string) {
    setSelectedKey(key)
  }
  return (
    <div className={classNames(styles.box, 'flex gap-[8px]')}>
      {chains.map((i) => (
        <Item {...i} key={i.title} onSelect={onSelect} isSelected={i.title === selectedKey || true} />
      ))}
    </div>
  )
}
export default Blockchain
