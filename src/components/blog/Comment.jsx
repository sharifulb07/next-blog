

export default function Comment({title}) {
    return (
        <div className="flex flex-col gap-5">

            <h1 className="text-[32px] font-bold">{title} </h1>
            <form action="" className="flex flex-col gap-5">
                <div className="flex gap-5 w-full">
                    <input
                        name="name"
                        placeholder="Your Name"
                        id="name"
                        type="text"
                        className="p-3 bg-input-bg w-full"
                    />  <input
                        name="name"
                        placeholder="Your email"
                        id="name"
                        type="email"
                        className="p-3 bg-input-bg w-full "

                    />
                </div>
                <textarea
                    maxLength={200}
                    name="comment"
                    placeholder="Your Comment..."
                    className="p-5 bg-input-bg h-[200px]"
                />


            </form>
            <p className="px-[30px] py-[12px] bg-amber-600 self-end text-white">Post Commnent</p>
        </div>
    )
}
