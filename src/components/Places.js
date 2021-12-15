import React from 'react'
import { Link } from 'react-router-dom'

export default function Places() {
    return (
        <div className="places">
            <div className="place1">
                <img src="https://image.slidesharecdn.com/environmentalthreats-140226064002-phpapp01/95/environmental-threats-1-638.jpg?cb=1393397023" alt="" />
                <div className="pcontent">
                    <h2>Threats</h2>
                    <p>Environmental threats are harmful after-effects of the human activities to the physical environment plaguing the planet with pollution, deforestation, climate change, ozone depletion, and water scarcity. This chapter addresses the three vital parameters such as water, air and climate, to enhance the consciousness among the people. Water scarcity is a severe environmental issue and needs potentially sustainable methods to address the threat. This study emphasizes the techniques to overcome the water crisis, such as wastewater reclamation methods, desalination, and conservation techniques. The work highlights the toxic mixture of particles and gases resulting in air pollution and its effect on humans, animals, and plants.</p>
                    <Link to="/threat" className="nav-link submit yellow" style={{ display: "inline-block", border: "1.5px solid black" }}>Learn More </Link>
                </div>
            </div>
            <div className="place2">
                <img src="https://cdnpreprodanteagroup.blob.core.windows.net/prod/media/resized/8/67bd1a07-b01b-4e52-aa33-592c2a6af0f2/1200x1200_environment1-min.jpg" alt="" />
                <div className="pcontent">
                    <h2>Solutions</h2>
                    <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                        Following are some of the most common solutions to the environmental issue:
                        <ul style={{ listStylePosition: "inside" }}>
                            <li>Replace disposal items with reusable items.</li>
                            <li>The use of paper should be avoided.</li>
                            <li>Conserve water and electricity.</li>
                            <li>Support environmental friendly practices.</li>
                            <li>Recycle the waste to conserve natural resources.</li>
                        </ul>
                        Environmental issues are a warning of the upcoming disasters. If these issues are not controlled, there will soon be no life on earth.
                    </div>
                    <Link to="/solution" className="nav-link submit purple" style={{ display: "inline-block", border: "1.5px solid black" }}>Learn More </Link>
                </div>
            </div>
        </div>
    )
}
