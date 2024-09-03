// components/Testimonials.js

'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "A responsive team, BitwiseBuilder is always available to provide support, making them excellent partners. Over the past five years, the project has run smoothly and successfully, satisfying internal stakeholders.",
        name: "Cam",
        role: "CPO, Arts Management System",
    },
    {
        quote: "The portal has had a great impact since it's been integrated to the website. The team at BitwiseBuilder is responsive, easy to work with, understanding, timely, and able to do a great job.",
        name: "Gerald",
        role: "CEO, Ballers Bridges",

    },
    {
        quote: "BitwiseBuilder exhibited their ability to grasp a complex project and provide potential solutions. The team strategized through seamless communication and a clear prioritization of tasks. Their efficiency and flexibility led to the speedy finish of a first-rate development project.",
        name: "Jesse Fowl",
        role: "Managing Director, Solomon Solutions INC",
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-blue-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12"
                >
                    What Our Clients Say<span className="text-blue-500">?</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <p className="text-gray-700 mb-4">
                                <span className="text-blue-500 text-3xl font-serif">&quot;</span>
                                {testimonial.quote}
                                <span className="text-blue-500 text-3xl font-serif">&quot;</span>
                            </p>
                            <div className="text-center">
                                <p className="font-semibold">{testimonial.name},</p>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                {/* <p className="text-xs text-blue-600 mt-2">- {testimonial.source}</p> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}