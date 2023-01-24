export const TailwindContent = () => {
    return (
        <>
            <h1
                className='text-gray-50 bg-orange-400  font-medium'
            >
                Hello World!
            </h1>
            <p className='border-t-4 border-indigo-600 text-lg italic tracking-wide'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, sequi.
            </p>
            <h3 className='text-vuejs hover:font-serif text-right line-through uppercase'>
            Hello Guru 
            </h3>
            <p className='leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi enim earum, consequatur officia placeat error, quaerat at quas asperiores rem aliquid suscipit saepe. Autem eveniet assumenda qui facilis libero.
            </p>
            <ul className='list-none hover:list-disc px-5'>
            <li>
                Hello Taisan 
            </li>
            </ul>
            <ol className='list-decimal'>
            <li>
                Hello Prabhu
            </li>
            </ol>
            <p className='truncate py-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, veritatis consequatur? Optio, consequuntur nisi? Reiciendis, nesciunt, voluptatem itaque dolores rerum accusantium molestiae nisi nihil accusamus incidunt iure non nulla asperiores minima, maiores ratione? Animi suscipit qui ut! Expedita suscipit quidem, reprehenderit nesciunt sequi officiis accusamus neque sunt quis dignissimos voluptates enim, aut voluptatibus? Iure in, ea nostrum obcaecati non quasi maiores nulla cupiditate odit explicabo assumenda nobis vel similique accusantium deleniti officia porro aperiam, expedita corrupti minus labore modi dicta facilis? Ut veritatis omnis quidem explicabo saepe eius cum expedita dolor qui, eos minus reiciendis illo enim corrupti, dolorum id.
            </p>
            <div className='w-96 bg-purple-400 pb-6'>
                w-40
            </div>
            <div className='w-96 bg-purple-400 mt-2'>
                w-40
            </div>
            <div className='flex space-x-4'>
            <div className='bg-yellow-400 w-5'>0</div>
            <div className='bg-yellow-400 w-5'>1</div>
            <div className='bg-yellow-400 w-5'>2</div>
            </div>
            <div className='flex flex-col space-y-4 mt-4'>
            <div className='bg-yellow-400 w-5'>0</div>
            <div className='bg-yellow-400 w-5'>1</div>
            <div className='bg-yellow-400 w-5'>2</div>
            </div>
            <div className="flex justify-between">
            <div className='bg-lime-900 order-last'>0</div>
            <div className='bg-sky-400'>1</div>
            <div className='bg-amber-300'>2</div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-2'>
            <div className='bg-blue-400'>01</div>
            <div className='bg-blue-400 col-span-2'>02</div>
            <div className='bg-blue-400'>03</div>
            <div className='bg-blue-400'>04</div>
            <div className='bg-blue-400'>05</div>
            <div className='bg-blue-400'>06</div>
            </div>
            <div className='grid grid-rows-4 grid-flow-col gap-4 mt-2'>
            <div className='bg-pink-400'>01</div>
            <div className='bg-pink-400'>02</div>
            <div className='bg-pink-400'>03</div>
            <div className='bg-pink-400'>04</div>
            <div className='bg-pink-400'>05</div>
            <div className='bg-pink-400'>06</div>
            </div>
            <div className="container mx-auto">
            <h2 className='bg-red-500'>
                Hello TailwindCSS Layouts 
            </h2>
            </div>
        </>
    )
}