import React from 'react'
import Item from './Item'

export default function Solution(props) {
    return (
        <div className='container' style={{ marginTop: "5vh" }}>
            <h2 className='text-center'>Solutions</h2>
            <div className="row">
                <div className={`${props.col} d-flex justify-content-center`}>
                    <Item
                        url="https://i0.wp.com/cqunilife.com/wp-content/uploads/2019/10/P_SOC_I_190311_DitchDisposables_CQUniLifeBlog.png?w=1200&ssl=1"
                        title="Say NO to disposable"
                        list={["Carry your own reusable cup or water bottle",
                            "Use airtight, reusable food containers instead of sandwich bags and plastic wrap",
                            "Pack a waste-free lunch: carry your utensils, cloth napkin, and containers in a reusable lunch bag",
                            "Bring your own bags to the grocery store",
                            "Consider buying bulk containers of your preferred beverages and refilling a reusable bottle, instead of buying individually packaged drinks",
                            "Use rechargeable batteries"]} />
                </div>
                <div className={`${props.col} d-flex justify-content-center`}>
                    <Item
                        url="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/559556_415818555105065_648946612_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=wfWkLkC6SJ8AX9xB6aj&_nc_ht=scontent-del1-1.xx&oh=01cb44be7d27b443ac9eb687e5836f8f&oe=61DCCE45"
                        title="Pass on paper"
                        list={["Join a library instead of buying books or buy a Kindle",
                            "Print as little as possible and must print on both sides",
                            "Wrap gifts in fabric and tie with ribbon, both are reusable and prettier than paper and sticky-tape",
                            "Stop using paper towels and incorporate washable cloths",
                            "Look at labels to make sure you only use FSC-certified wood and paper products",
                            "Cut out products made by palm oil companies that contribute to deforestation in Indonesia and Malaysia"]} />
                </div>
                <div className={`${props.col} d-flex justify-content-center`}>
                    <Item
                        url="https://www.4-you.gr/images/blog/save-environment.jpg"
                        title="Conserve water & electricity"
                        list={["Turn the sink water off when brushing your teeth",
                            "Switch off anything that uses electricity when not in use (lights, televisions, computers, printers, etc.)",
                            "Unplug devices when possible, even when an appliance is turned off, it may still use power",
                            "Remove chemicals based products, use eco-friendly pesticides and herbicides that won’t contaminate groundwater",
                            "Consider signing up for a renewable energy producer that uses 100% renewable energy to power homes"]} />
                </div>
                <div className={`${props.col} d-flex justify-content-center`}>
                    <Item
                        url="https://www.maxpixel.net/static/photo/2x/Tree-Butterfly-Sustainability-Energy-Globe-5725540.jpg"
                        title="Support environment friendly"
                        list={["Reduces plastic and paper waste",
                            "Boosts cost-efficiency",
                            "Enables bulk purchasing",
                            "Helps support your neighbors",
                            "Retains farmland within the community",
                            "Builds up the local economy",
                            "Uses fewer chemicals for both for growing and transporting"]} />
                </div>
                <div className={`${props.col} d-flex justify-content-center`}>
                    <Item
                        url="https://live.staticflickr.com/65535/50169473338_d20242cf09_b.jpg"
                        title="Recycle"
                        list={["Confirm you are using the proper separation containers for your household per the local recycling services",
                            "Remember to make sure your trash bags are recycled or biodegradable, and always cut up the plastic rings from packs of beer or soda to prevent wildlife from getting caught",
                            "Educate yourself about what can and cannot be recycled, as not all plastic and cardboard is acceptable (like pizza boxes for example, due to the grease) (click here for a simple 101)",
                            "Learn how to identify and dispose of hazardous waste properly (click here to learn more)"]} />
                </div>
                <div className={`${props.col} d-flex justify-content-center`}>
                    <Item
                        url="https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg"
                        title="Conclusion"
                        list={["Add these simple lists to your digital checklist and pick one at a time to tackle. After a week or so, check it off the list and move on to the next. Remember to pat yourself on the back! You just created a change in your lifestyle!",
                            "Find a comfortable compromise for your life. Purchase a pack of affordable, reusable rags and give them a specific purpose. For example, perhaps you always clean your countertops with paper towels; try wiping them down with cloth towels instead.",
                            "Remember to highlight your successes and share them with others!"]} />
                </div>
            </div>
            <h3 className='text-center'><a href="https://www.google.com/search?q=%23savetheplanet" target="_blank" rel="noreferrer">#savetheplanet</a></h3>
        </div >
    )
}
