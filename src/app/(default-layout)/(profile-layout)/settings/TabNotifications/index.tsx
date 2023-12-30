'use client'

import { useState } from 'react'
import Image from 'next/image'

import css from './index.module.scss'
import iconArrowDown from './icons/icon-arrow-down.svg'
import iconNotification from './icons/icon-notification.png'
import iconSubscription from './icons/icon-subscription.png'

import Card, { CardBody, CardHead, CardFooter } from "@/components/core/Card"
import CardTabs, {ICardTab} from '@/components/CardTabs'
import Container from "@/components/core/Container"
import ModalEmail from '@/components/ModalEmail'
import Typography from '@/components/core/Typography'
import Switch from '@/components/core/Switch'


type TabName = 'notifications' | 'subscriptions'

const tabs: ICardTab[] = [
    {
        value: 'notifications',
        title: 'Notifications',
        icon: iconNotification
    },
    {
        value: 'subscriptions',
        title: 'Subscriptions',
        icon: iconSubscription
    }
]


export default function TabProfile() {

    const [activeTab, setActiveTab] = useState<TabName>('notifications')
    const [modalEmail, setModalEmail] = useState(false)


    return <Container className={css.container}>
        <CardTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            className={css.mobileTabs}
        />
        <div className={css.cards}>
            <Card
                className={[
                    css.card,
                    activeTab === 'notifications' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image className={css.cardHeadIcon} src={iconNotification} alt='icon' />
                        Notifications
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        <Typography className={css.emptyDescription} variant='p' color='neutral'>It&apos;s empty here...</Typography>
                    </CardBody>
                </div>
            </Card>
            <Card
                className={[
                    css.card,
                    activeTab === 'subscriptions' && css.cardActive
                ].join(' ')}
            >
                <div>
                    <CardHead className={css.cardHead}>
                        <Image className={css.cardHeadIcon} src={iconSubscription} alt='icon' />
                        Subscription management
                    </CardHead>
                    <CardBody className={css.cardBody}>
                        <Typography variant='p'>Cabinet notification</Typography>
                        <div className={css.blockSubscription}>
                            Email notification
                            <Switch/>
                        </div>
                        <div className={css.blockSubscription}>
                            Account notification
                            <Switch/>
                        </div>
                        <div className={[css.blockSubscription, css.blockEveryDay].join(' ')}>
                            Every day
                            <Image src={iconArrowDown} alt="icon"/>
                        </div>
                        <Typography variant='p'>Project notification</Typography>
                        <div className={css.blockSubscription}>
                            Email notification
                            <Switch/>
                        </div>
                        <div className={css.blockSubscription}>
                            Account notification
                            <Switch/>
                        </div>
                        <div className={[css.blockSubscription, css.blockEveryDay].join(' ')}>
                            Every day
                            <Image src={iconArrowDown} alt="icon"/>
                        </div>
                    </CardBody>
                </div>
            </Card>
        </div>
        <ModalEmail active={modalEmail} setActive={setModalEmail}/>
    </Container>
}