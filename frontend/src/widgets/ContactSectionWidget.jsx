import { data } from "../static/data/data"

export const ContactSectionWidget = _ => {
    return (
        <div className="contact-section-widget section-widget">
            <div className="section-title">
                <h2>Contact</h2>
            </div>

            <div className="container">
                <form action="https://formsubmit.co/carlosabdoamaral@gmail.com" method="POST">
                    {/* EMAIL CONFIGS */}
                    <input type="hidden" name="_subject" value="New submission!"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_autoresponse" value={data.contact.after}/>
                    <input type="hidden" name="_template" value="table"/>

                    <input type="email" name="email" placeholder="Your email" required/>
                    <input type="text" name="name" placeholder="Your name" required/>
                    <textarea name="message" placeholder="Your message" required></textarea>
                    <button type="submit">Send!</button>
                </form>
            </div>
        </div>
    )
}