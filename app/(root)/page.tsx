import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Adrian', lastName: 'Dick', email: 'mail@email.com' }
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions effeciently "
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT_TRANSACTIONS
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
               banks={[{currentBalance: 1234.65},{currentBalance: 1234.60}]} />
        </section>
    )
}

export default Home
