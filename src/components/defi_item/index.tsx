import classNames from 'classnames'
import Image from 'next/image'
import { CSSProperties, useMemo } from 'react'
import styles from './index.module.css'

interface SimplifyItemProps {
  img: string
  title: string
  subTitle: string
  subTitleClassName?: string
  style?: CSSProperties
  idx: number
}
function DefiItem({ img, idx, title, subTitle, subTitleClassName, style = {} }: SimplifyItemProps) {
  const width = useMemo(() => {
    if (idx === 0 || idx === 2) {
      return 324
    }
    return 304
  }, [idx])
  return (
    <div className="flex flex-col text-center justify-center items-center" style={{ flex: `0 0 ${width}px`, ...style }}>
      <Image alt="" className={styles.box} width={304} height="243" src={img} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={classNames(styles.subTitle, subTitleClassName)}>{subTitle}</div>
      </div>
    </div>
  )
}
export default DefiItem
