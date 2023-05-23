type UserCardProps = {
    time: 'daily' | 'monthly' | 'weekly'
    changeTime: (newTime: 'daily' | 'monthly' | 'weekly') => void
}

function UserCard({ changeTime, time }: UserCardProps) {
    const times = ['Daily', 'Weekly', 'Monthly']
    return (
        <div className='row-span-2 bg-dark-blue rounded-xl md:w-[200px] w-[250px]'>
            <div className='bg-blue p-5 rounded-xl flex md:flex-col md:items-start items-center md:gap-0 gap-2'>
                <div className='p-[2px] bg-white w-fit rounded-full'>
                    <img
                        src='/images/image-jeremy.png'
                        alt='Jeremy'
                        className=' w-16'
                    />
                </div>
                <div className='font-light md:py-10 py-2'>
                    <p className='text-pale-blue text-sm'>Report for</p>
                    <p className='text-white md:text-4xl text-lg'>
                        Jeremy Robson
                    </p>
                </div>
            </div>
            <div className='text-desaturated-blue p-5 flex md:flex-col gap-1 md:justify-normal justify-between'>
                {times.map((t) => (
                    <div
                        key={t}
                        className={`${
                            time === t.toLowerCase() && 'text-pale-blue'
                        } cursor-pointer hover:text-pale-blue`}
                        onClick={() =>
                            changeTime(
                                t.toLowerCase() as
                                    | 'daily'
                                    | 'monthly'
                                    | 'weekly'
                            )
                        }
                    >
                        {t}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserCard
