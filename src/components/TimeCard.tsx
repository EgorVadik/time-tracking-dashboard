type TimeCardProps = {
    title: string
    currentTime: number
    prevTime: number
    topColor: string
    icon: string
}

export default function TimeCard({
    currentTime,
    icon,
    prevTime,
    title,
    topColor,
}: TimeCardProps) {
    return (
        <div className='md:w-[200px] w-[250px]'>
            <div
                className={`relative top-3 z-0 f-full h-12 rounded-t-xl ${topColor}`}
            >
                <img
                    src={`/public/images/icon-${icon}.svg`}
                    alt={title}
                    className='ml-auto mr-5 w-14'
                />
            </div>
            <div className='relative z-10 bg-dark-blue rounded-xl md:p-5 px-5 py-2 hover:bg-[#353979] cursor-pointer'>
                <div className='flex justify-between items-center'>
                    <p className='text-white font-medium text-lg'>{title}</p>
                    <img
                        src='/public/images/icon-ellipsis.svg'
                        alt='icon ellipsis'
                        className='cursor-pointer'
                    />
                </div>

                <div className='flex md:flex-col md:items-start items-center md:justify-normal justify-between'>
                    <p className='font-light text-white md:text-4xl text-xl md:pt-4'>
                        {currentTime}Hrs
                    </p>
                    <p className='text-xs text-pale-blue md:pt-2'>
                        Last week - {prevTime}hrs
                    </p>
                </div>
            </div>
        </div>
    )
}
