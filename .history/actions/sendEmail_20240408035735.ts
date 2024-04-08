import { ContactFormEmail } from '@/email/contact-form-email';
import { getErrorMessage } from './../lib/utils';
"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
  if (!validateString(senderEmail,500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message,5000)) {
    return {
      error: "Invalid message",
    };
  }

  try{
    await resend.emails.send({
      from:'onboarding@resend.dev' ,
      to: 'gurkanyildirim693@gmail.com' , 
      subject: 'Message from contact form' , 
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail)

  })
  }catch(error:unknown){
    error: getErrorMessage(error);
  }
    
    
};
