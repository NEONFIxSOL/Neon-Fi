import classNames from 'classnames'
import Image from 'next/image'
import styles from './index.module.css'

interface SimplifyItemProps {
  img: string
  title: string
  subTitle: string
  subTitleClassName?: string
  setSelectedKey: (key: string) => void
  isSelected?: boolean
}
function SimplifyItem({ img, title, subTitle, subTitleClassName, setSelectedKey, isSelected }: SimplifyItemProps) {
  return (
    <div
      onClick={() => setSelectedKey(title)}
      className={classNames({ [styles.isSelected]: isSelected }, 'flex gap-[30px] cursor-pointer')}
    >
      <Image alt="" className={styles.box} width={102} height="102" src={img} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={classNames(styles.subTitle, subTitleClassName)}>{subTitle}</div>
      </div>
    </div>
  )
}
export default SimplifyItem
