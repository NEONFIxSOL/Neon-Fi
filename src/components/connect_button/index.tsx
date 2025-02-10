'use client'
import { useIsActive } from '@/hooks/use_wallet'
import classNames from 'classnames'
import { FC } from 'react'
import styles from './index.module.css'

type IProps = FC<{ children?: any; className?: any; isShow?: boolean }>
const ConnectButton: IProps = ({ children, className, isShow }) => {
  const isActive = useIsActive()
  if (!isShow && isActive) return
  return (
    <>
      <label className={classNames(styles.btn, 'cursor-pointer inline-flex gap-2', className)} htmlFor="my-drawer">
        {children ?? 'Connect'}
      </label>
    </>
  )
}
export default ConnectButton
