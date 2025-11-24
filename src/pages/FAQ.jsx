
import React from 'react';

import { QuestionMarkCircleIcon, ChatBubbleBottomCenterTextIcon, BookOpenIcon } from '@heroicons/react/24/solid'; 
import FAQAccordion from '../components/faq/FAQAccordion';

const faqs = [
    {
        question: "How do I make a payment online?",
        answer: "We support multiple secure online payment methods, including major credit/debit cards, Tellbirr, and popular digital wallets. You can select your preferred method during the booking process.",
    },
    {
        question: "What is the difference between Same-Day and Scheduled Delivery?",
        answer: "Same-Day Delivery is for urgent parcels delivered within hours of booking. Scheduled Delivery allows you to book in advance for a specific date and time, which is ideal for regular business shipments.",
    },
    {
        question: "Can I track my order in real-time?",
        answer: "Yes, every delivery comes with a unique tracking ID. You can enter this ID on the 'Track Order' page to view the live status, location updates, and estimated delivery time.",
    },
    {
        question: "How do you manage drivers and ensure safety?",
        answer: "Our Admin Control Panel includes a dedicated Driver Management system. All drivers are verified, and we use GPS tracking and performance metrics to ensure safety, reliability, and efficient route planning.",
    },
   
    {
        question: "What items are prohibited from being shipped?",
        answer: "We strictly prohibit the shipment of illegal substances, flammable materials, live animals, firearms, and highly fragile or perishable goods that require specialized transport not offered by our standard service.",
    },
    {
        question: "What is your policy on lost or damaged packages?",
        answer: "In the event of a lost or damaged package, customers are required to file a claim within 48 hours of the expected delivery date. We offer compensation based on the declared value of the item, up to our maximum liability limit, as outlined in our Terms of Service.",
    },
    {
        question: "Do you offer bulk shipping discounts for businesses?",
        answer: "Yes, we provide tiered pricing and discounted rates for our corporate and e-commerce partners based on monthly volume. Please contact our Sales team for a customized business plan.",
    },
    {
        question: "How do I change the delivery address after booking?",
        answer: "If the package has not yet been dispatched, you can modify the address through your Customer Dashboard. If it is already in transit, please contact customer support immediately for assistance, though a redirection fee may apply.",
    },
    
    {
        question: "What if my question isn't listed here?",
        answer: "Please navigate to our 'Contact Us' page, where you can submit a form directly, or call our dedicated customer support line for immediate assistance.",
    },
];

const FAQ = () => {
  return (
 
    <div className="mx-auto max-w-6xl px-4 py-16 bg-orange-50 min-h-[80vh]">
        
        <div className="p-4">
        
            <div className="text-center mb-12">
                <QuestionMarkCircleIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
                    Frequently Asked <span className='text-orange-600'>Questions</span>
                </h1>
            </div>
            
            <div className="space-y-12">
                
                {/* Main FAQ Section */}
                <section className='max-w-4xl mx-auto'>
                    <h2 className="text-3xl font-semibold text-orange-600 mb-6 flex items-center gap-3 border-b pb-2">
                        <BookOpenIcon className='w-7 h-7' /> General Queries
                    </h2>
                    
                    {/* Accordion List */}
                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <FAQAccordion 
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </section>

              
                <div className="text-center pt-8">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Need More Information?</h3>
                    <p className="text-lg text-gray-700 mb-6">
                        Our support team is ready to assist you with any unanswered questions.
                    </p>
                    <div className="inline-block shadow-lg transition-transform hover:scale-105 rounded-lg">
                        <a 
                            href="/contact" 
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-white bg-orange-600 text-xl rounded-lg hover:bg-orange-700 transition-all duration-200"
                        >
                            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-2" /> Contact Us Directly
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default FAQ;