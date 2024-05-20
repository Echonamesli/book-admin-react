import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons/lib';
import type { MenuProps } from 'antd/lib';
import { Breadcrumb, Layout as AntdLayout, Menu, theme, Dropdown, Space } from 'antd/lib';
import Image from 'next/image'
import styles from './index.module.css'
import { useRouter } from 'next/router';
import Head from 'next/head';
const { Header, Content, Sider } = AntdLayout;

const ITEMS = [
    {
        // icon: React.createElement(icon),
        label: '图书管理',
        key: 'book',
        children: [{
            label: '图书列表',
            key: '/book',
        }, {
            label: '图书添加',
            key: '/book/add',
        }]
    },
    {
        // icon: React.createElement(icon),
        label: '借阅管理',
        key: 'borrow',
        children: [{
            label: '借阅列表',
            key: '/borrow',
        }, {
            label: '借阅添加',
            key: '/borrow/add',
        }]
    },
    {
        // icon: React.createElement(icon),
        label: '分类管理',
        key: 'category',
        children: [{
            label: '分类列表',
            key: '/category',
        }, {
            label: '分类添加',
            key: '/category/add',
        }]
    },
    {
        // icon: React.createElement(icon),
        label: '用户管理',
        key: 'user',
        children: [{
            label: '用户列表',
            key: '/user',
        }, {
            label: '用户添加',
            key: '/user/add',
        }]
    },
]
const USER_ITEMS: MenuProps['items'] = [
    {
        key: '1',
        label: '用户中心'
    },
    {
        key: '2',
        label: '登出'
    }
];

export function Layout({ children }) {
    const router = useRouter()
    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        router.push(key)
    };
    return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <AntdLayout>
                <Header className={styles.header}>
                    <div>
                        <Image src='/logo.svg' width={30} height={30} alt="logo" className={styles.logo} />
                        小李图书管理系统
                        <span className={styles.user}>
                            <Dropdown menu={{ items: USER_ITEMS }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        用户名
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </span>
                    </div>
                </Header>
                <AntdLayout>
                    <Sider width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['/book']}
                            defaultOpenKeys={['book']}
                            style={{ height: '100%', borderRight: 0 }}
                            items={ITEMS}
                            onClick={handleMenuClick}
                        />
                    </Sider>
                    <AntdLayout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content>
                            Content
                            {children}
                        </Content>
                    </AntdLayout>
                </AntdLayout>
            </AntdLayout>
        </main>
    </>
    )
}