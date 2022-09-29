import {
  ImgWrp,
  Container
} from './Contact.styled';
import Image from './Image/Image';
import Form from "../Form/Form";


const Contact = () => { 
    return (
        <Container id="contact">
            <ImgWrp>
                <Image />
            </ImgWrp>
            <Form />
        </Container>
    )
};

export default Contact;