'use client';

import Link from 'next/link';
import React from 'react'

import styles from './ActiveLink.module.css'; 
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  text: string;
}

export const ActiveLink = ({href, text}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link className={`${styles.link} ${isActive ? styles.active : ''}`} href={href}>{text}</Link>
  )
}
