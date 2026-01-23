import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
    return (

        <div className="hidden md:flex justify-between items-center px-6 lg:px-20 py-2 border-b border-gray-800 text-xs text-gray-400">
            <div className="flex gap-6">
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Home</span>
                <span className="hover:text-accent-gold cursor-pointer transition-colors">About Us</span>
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Pages</span>
                <span className="hover:text-accent-gold cursor-pointer transition-colors">Contact Us</span>
            </div>
            <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent-gold" />
                    <span>Call Us On: 911-987654321</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent-gold" />
                    <span>Email Us On: yourmail@mail.com</span>
                </div>
            </div>
        </div>
    )
}