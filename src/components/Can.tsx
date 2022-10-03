import React, { ReactNode } from 'react'
import { UseCan } from '../hooks/UseCan';
interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
}

export default function Can({ children, permissions, roles }: CanProps) {
  const userCanSeeComponent = UseCan({ permissions, roles })

  if (!userCanSeeComponent) {
    return null
  }
  return (
    <>{children}</>
  )
}
