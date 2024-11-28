

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';




const Damo = () => {

    const form = useRef();

    const resetForm = () => {
        form.current.reset();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_cspd7yc', 'template_3p90msb', form.current, {
                publicKey: 'lq-Z95euxr4fplb0-',
            })
            .then(
                () => {

                    toast.success("Successfully message send")
                    resetForm();

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };



    return (
        <div className="max-w-6xl mx-auto  py-16">
            <div
                className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg  bg-white my-6 before:absolute before:right-0 before:w-[300px] before:bg-[#0ba360] before:h-full max-md:before:hidden">
                <div>

                    {/* Description  */}
                    <h2 className="text-3xl font-extrabold">Get In Touch</h2>
                    <p className="text-sm mt-8">Have a specific inquiry or looking to explore new opportunities? Our
                        experienced team is ready to engage with you.</p>

                    {/* Form Part      */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="space-y-4 mt-8 c">
                            {/* Name  */}
                            <input name="name" type="text" required placeholder="Full Name"
                                className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#0ba360] outline-none" />

                            {/* Email      */}
                            <input name="email" type="email" required placeholder="Email"
                                className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#0ba360] outline-none" />

                            {/* Massage  */}
                            <textarea name="message" required placeholder="Write Message"
                                className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#0ba360] outline-none"></textarea>
                        </div>

                        {/* Submit Btn  */}
                        <div className="mt-12">
                            <button type="submit"
                                className="text-black bg-gradient-to-r  from-[#0ba360] via-[#0ba360] to-lime-200 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans w-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Google Map  */}
                <div className="relative h-full max-md:min-h-[350px]">
                    <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        allowfullscreen></iframe>
                </div>

            </div>

        </div>
    );
};

export default Damo;