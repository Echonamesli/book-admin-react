import { Layout } from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "antd/dist/reset.css";

//Component属性是活动的page，因此每当你在路由之间导航时，Component 都会更改为新的 page。因此，你发送给 Component 的任何属性都会被 page 接收。
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
