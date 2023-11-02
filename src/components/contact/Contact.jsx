import { Contact, ContactContent, Form, 
InputField, Input, TextArea } from "./styled";

export default function contact() {
    return(
        <Contact id="contact">
            <header className="heading" data-aos="fade-down">
                <h2>Contact <span>me</span></h2>
            </header>
            <ContactContent data-aos="zoom-in-up">
                <Form action="#">
                    <InputField>
                        <Input type="text" placeholder="Your name" required />
                    </InputField>
                    <InputField>
                        <Input type="email" placeholder="Email address" required />
                    </InputField>
                    <InputField>
                        <TextArea cols={"30"} rows={"10"} 
                        placeholder="Write message here..." required></TextArea>
                    </InputField>
                    <button type="submit" className="btn">Send message</button>
                </Form>
            </ContactContent>
        </Contact>
    )
}