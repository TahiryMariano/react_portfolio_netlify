import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o0wbo7b', 'template_1s785v9', form.current, 'DxnlWM3SkZ1e_ZLdT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <i className="ri-mail-line contact__option-icon"></i>
                        <h4>Email</h4>
                        <h5>tahirymariano.htm@gmail.com</h5>
                        <a href="mailto:tahirymariano@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <i className="ri-facebook-box-line contact__option-icon"></i>
                        <h4>Facebook</h4>
                        <h5>Tahiry Herimampionona</h5>
                        <a href="https://m.facebook.com/100005181618755/" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <i className="ri-instagram-line contact__option-icon"></i>
                        <h4>Instagram</h4>
                        <h5>Tahiry_mariano</h5>
                        <a href="https://www.instagram.com/tahiry_mariano/" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS  */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" cols="30" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact