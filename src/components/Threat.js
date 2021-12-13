import React from 'react'
import Item from './Item'

export default function Threat() {
    return (
        <div className='container' style={{ marginTop: "5vh" }}>
            <h2 className='text-center'>Threats</h2>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                    <Item
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsSMBtoV0mOvpkAz5xyoH9Kp0QuGLMztKCQ&usqp=CAU"
                        title="Hazardous Waste"
                        description="Environmental racism is inequitable distribution of environmental hazards based on race. The Federal Agency for Toxic Substances and Disease Registry considers lead poisoning to be the number one environmental health problem for children in the United States. Some 4 million children worldwide have dangerously high lead levels in their bodies absorbed from contaminated drinking water and soil polluted by industrial effluents and automobile exhaust." />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <Item
                        url="https://bloximages.chicago2.vip.townnews.com/poststar.com/content/tncms/assets/v3/editorial/9/32/93286428-e51b-55bb-be75-ad665a58c950/5c9ea9562273f.image.jpg?resize=1200%2C800"
                        title="Animal Extinction"
                        description="Every year humans kill about 100 million sharks, skates and rays about half of them caught as unwanted 'by-catch' while fishing for other species. Sharks are particularly sensitive to overfishing because they grow slowly, mature late and have few young each generation." />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <Item
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvOiCjYlQRFGIgeRV5gQK9ImQkWbq3U79sQ&usqp=CAU"
                        title="Overpopulation"
                        description="Every second, on average, four or five children are born somewhere on the earth. At that same second, two other people die. This difference between births and deaths means a net gain of roughly 2.5 more humans per second in the world population. This means we are adding 9,000 per hour, 217,000 per day, or about 79 million more people per year." />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <Item
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBby7hzEzj6jqpr0xLCcp2nHvtkDJhKKgT1Q&usqp=CAU"
                    title="Deforestation"
                    description="Worldwide, we lost between 9 million and 12 million of forest per year from 1990 to 2000. Clear-cutting and burning, especially in order to get pasture and cropland, have turned many forests into a dry, barren ground." />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <Item
                    url="https://cdn.pixabay.com/photo/2017/04/23/19/17/climate-change-2254711_1280.jpg"
                    title="Global Warming"
                    description="In February 2002, a huge section of the Larsen B Ice Shelf along The Antarctic Peninsula coast suddenly disintegrated into thousands of icebergs. The total volume of ice released was the equivalent to 29 trillion bags of party ice. Climatologists warn that this dramatic collapse could be a signal of global climate change and an omen of catastrophic events to come." />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <Item
                    url="https://live.staticflickr.com/1869/42811160360_6a69aff21e_b.jpg"
                    title="Air Pollution"
                    description="How does the air taste, feel, smell, and look in your neighbourhood? Chances are that wherever you live, the air is contaminated to some degree. Smoke, dust, corrosive gases and toxic compounds are present nearly everywhere." />
                </div>
            </div>
        </div >
    )
}
