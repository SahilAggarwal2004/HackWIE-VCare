import './App.css';
import './style2.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Welcome from './components/Welcome';
import Home from './components/Home';
import Cards from './components/Cards';
import Item from './components/Item';
import Contact from './components/Contact';
import Success from './components/Success';
import { useState } from 'react';

function App() {

  const [col, setCol] = useState('col-md-4')
  const root = document.getElementById('root')

  window.addEventListener('resize', () => {
    if (root.clientWidth >= 992) { setCol('col-md-4') }
    else { setCol('col-md-6') }
  })

  const threatItems = [
    <Item
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsSMBtoV0mOvpkAz5xyoH9Kp0QuGLMztKCQ&usqp=CAU"
      title="Hazardous Waste"
      description="Environmental racism is inequitable distribution of environmental hazards based on race. The Federal Agency for Toxic Substances and Disease Registry considers lead poisoning to be the number one environmental health problem for children in the United States. Some 4 million children worldwide have dangerously high lead levels in their bodies absorbed from contaminated drinking water and soil polluted by industrial effluents and automobile exhaust." />,
    <Item
      url="https://bloximages.chicago2.vip.townnews.com/poststar.com/content/tncms/assets/v3/editorial/9/32/93286428-e51b-55bb-be75-ad665a58c950/5c9ea9562273f.image.jpg?resize=1200%2C800"
      title="Animal Extinction"
      description="Every year humans kill about 100 million sharks, skates and rays about half of them caught as unwanted 'by-catch' while fishing for other species. Sharks are particularly sensitive to overfishing because they grow slowly, mature late and have few young each generation." />,
    <Item
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvOiCjYlQRFGIgeRV5gQK9ImQkWbq3U79sQ&usqp=CAU"
      title="Overpopulation"
      description="Every second, on average, four or five children are born somewhere on the earth. At that same second, two other people die. This difference between births and deaths means a net gain of roughly 2.5 more humans per second in the world population. This means we are adding 9,000 per hour, 217,000 per day, or about 79 million more people per year." />,
    <Item
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBby7hzEzj6jqpr0xLCcp2nHvtkDJhKKgT1Q&usqp=CAU"
      title="Deforestation"
      description="Worldwide, we lost between 9 million and 12 million of forest per year from 1990 to 2000. Clear-cutting and burning, especially in order to get pasture and cropland, have turned many forests into a dry, barren ground." />,
    <Item
      url="https://cdn.pixabay.com/photo/2017/04/23/19/17/climate-change-2254711_1280.jpg"
      title="Global Warming"
      description="In February 2002, a huge section of the Larsen B Ice Shelf along The Antarctic Peninsula coast suddenly disintegrated into thousands of icebergs. The total volume of ice released was the equivalent to 29 trillion bags of party ice. Climatologists warn that this dramatic collapse could be a signal of global climate change and an omen of catastrophic events to come." />,
    <Item
      url="https://live.staticflickr.com/1869/42811160360_6a69aff21e_b.jpg"
      title="Air Pollution"
      description="How does the air taste, feel, smell, and look in your neighbourhood? Chances are that wherever you live, the air is contaminated to some degree. Smoke, dust, corrosive gases and toxic compounds are present nearly everywhere." />
  ];
  const solItems = [
    <Item
      url="https://i0.wp.com/cqunilife.com/wp-content/uploads/2019/10/P_SOC_I_190311_DitchDisposables_CQUniLifeBlog.png?w=1200&ssl=1"
      title="Say NO to disposable"
      list={["Carry your own reusable cup or water bottle",
        "Use airtight, reusable food containers instead of sandwich bags and plastic wrap",
        "Pack a waste-free lunch: carry your utensils, cloth napkin, and containers in a reusable lunch bag",
        "Bring your own bags to the grocery store",
        "Consider buying bulk containers of your preferred beverages and refilling a reusable bottle, instead of buying individually packaged drinks",
        "Use rechargeable batteries"]} />,
    <Item
      url="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/559556_415818555105065_648946612_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=wfWkLkC6SJ8AX9xB6aj&_nc_ht=scontent-del1-1.xx&oh=01cb44be7d27b443ac9eb687e5836f8f&oe=61DCCE45"
      title="Pass on paper"
      list={["Join a library instead of buying books or buy a Kindle",
        "Print as little as possible and must print on both sides",
        "Wrap gifts in fabric and tie with ribbon, both are reusable and prettier than paper and sticky-tape",
        "Stop using paper towels and incorporate washable cloths",
        "Look at labels to make sure you only use FSC-certified wood and paper products",
        "Cut out products made by palm oil companies that contribute to deforestation in Indonesia and Malaysia"]} />,
    <Item
      url="https://www.4-you.gr/images/blog/save-environment.jpg"
      title="Conserve water & electricity"
      list={["Turn the sink water off when brushing your teeth",
        "Switch off anything that uses electricity when not in use (lights, televisions, computers, printers, etc.)",
        "Unplug devices when possible, even when an appliance is turned off, it may still use power",
        "Remove chemicals based products, use eco-friendly pesticides and herbicides that won’t contaminate groundwater",
        "Consider signing up for a renewable energy producer that uses 100% renewable energy to power homes"]} />,
    <Item
      url="https://www.maxpixel.net/static/photo/2x/Tree-Butterfly-Sustainability-Energy-Globe-5725540.jpg"
      title="Support environment friendly"
      list={["Reduces plastic and paper waste",
        "Boosts cost-efficiency",
        "Enables bulk purchasing",
        "Helps support your neighbors",
        "Retains farmland within the community",
        "Builds up the local economy",
        "Uses fewer chemicals for both for growing and transporting"]} />,
    <Item
      url="https://live.staticflickr.com/65535/50169473338_d20242cf09_b.jpg"
      title="Recycle"
      list={["Confirm you are using the proper separation containers for your household per the local recycling services",
        "Remember to make sure your trash bags are recycled or biodegradable, and always cut up the plastic rings from packs of beer or soda to prevent wildlife from getting caught",
        "Educate yourself about what can and cannot be recycled, as not all plastic and cardboard is acceptable (like pizza boxes for example, due to the grease) (click here for a simple 101)",
        "Learn how to identify and dispose of hazardous waste properly (click here to learn more)"]} />,
    <Item
      url="https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg"
      title="Conclusion"
      list={["Add these simple lists to your digital checklist and pick one at a time to tackle. After a week or so, check it off the list and move on to the next. Remember to pat yourself on the back! You just created a change in your lifestyle!",
        "Find a comfortable compromise for your life. Purchase a pack of affordable, reusable rags and give them a specific purpose. For example, perhaps you always clean your countertops with paper towels; try wiping them down with cloth towels instead.",
        "Remember to highlight your successes and share them with others!"]} />
  ]

  return (
    <div id="width">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/threat" element={<Cards head="Threats" link={false} col={col} items={threatItems} />} />
          <Route path="/solution" element={<Cards head="Solutions" link={true} col={col} items={solItems} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<Success head="Thank you! Your application has been successfully submitted." sub="We will get in touch with you over the provided mail id." />} />
          <Route path="/donate/success" element={<Success head="Thank You! You have made a step to save our planet." sub="We will get in touch with you over the provided mail id for the payment details." />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
