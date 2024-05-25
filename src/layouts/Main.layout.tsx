import { PropsWithChildren } from 'react'
import Header from '../components/Header'

export default function GridContainer({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header title='Alternova Shop' />
      <div className='grid grid-cols-2 min-h-screen p-10'>{children}</div>
    </>
  )
}
