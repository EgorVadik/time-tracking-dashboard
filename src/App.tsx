import TimeCard from './components/TimeCard'
import data from '../data.json'
import { useState } from 'react'
import UserCard from './components/UserCard'

export default function App() {
    const [time, setTime] = useState<'daily' | 'monthly' | 'weekly'>('daily')
    const changeTime = (newTime: 'daily' | 'monthly' | 'weekly') => {
        setTime(newTime)
    }

    const colors = [
        'bg-light-red',
        'bg-soft-blue',
        'bg-light-red-study',
        'bg-lime-green',
        'bg-violet',
        'bg-soft-orange',
    ]

    return (
        <main className='font-rubik bg-very-dark-blue min-h-screen flex items-center justify-center lg:py-0 py-10'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 gap-3'>
                <UserCard changeTime={changeTime} time={time} />
                {data.map((value, i) => (
                    <TimeCard
                        key={value.title}
                        currentTime={value.timeframes[time].current}
                        icon={value.title.toLowerCase().replace(' ', '-')}
                        prevTime={value.timeframes[time].previous}
                        title={value.title}
                        topColor={colors[i]}
                    />
                ))}
            </div>
        </main>
    )
}
