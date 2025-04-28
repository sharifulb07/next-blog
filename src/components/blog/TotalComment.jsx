import CommentTem from "./CommentTem";


export default function TotalComment() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-pt_serif text-[32px] font-bold">Comments (02)</h1>
            <CommentTem name={'Kevin'} photo={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww'}
                hour={3}
                desc={'Donec pellentesque luctus tortor finibus blandit. Fusce tincidunt lectus augue, quis commodo justo tincidunt eget. Praesent at elit diam.'}
            />
            <CommentTem name={'Marry'} photo={'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'}
                hour={4}
                desc={'Nulla varius enim eu dui venenatis, nec lacinia urna gravida. Vivamus euismod tincidunt eros at bibendum. Proin lacus dolor, posuere et posuere eu, congue posuere lectus. Suspendisse id lorem egestas, volutpat lacus a, auctor justo. Cras ac elementum arcu, eget ornare massa. Donec eget urna magna. Fusce vestibulum arcu eu libero ullamcorper, nec semper dolor bibendum. Mauris laoreet justo massa, vitae venenatis augue dignissim ac.'}
            />

        </div>
    )
}
