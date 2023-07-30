import { About3Card } from "./about3Card"
import howItWorks from "../imgs/project3HowItWorks.png"

export const About3 = () => {
    return (
        <div className="about-section" id="about3">
            <div className="abt3-side">
                <h1>How it works</h1>
                <About3Card
                    number={1}
                    txt={'Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.'}
                    header={'Choose your property'}
                />
                <About3Card
                    number={2}
                    txt={'Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.'}
                    header={'See the property directly'}
                />
                <About3Card
                    number={3}
                    txt={'Odio velit, massa augue etiam in parturient volutpat orci. Pulvinar amet, at est ac curabitur mauris, semper cursus metus. Imperdiet sed massa amet at turpis. Dis risus, donec in ac ultricies tempor eu, amet.'}
                    header={'Easy payment'}
                />
            </div>
            <div className="abt3-side">
                <img src={howItWorks} alt="img" />
            </div>
        </div>
    )
}