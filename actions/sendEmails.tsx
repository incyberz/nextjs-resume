"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 100)) {
    return {
      error: "Invalid stringtype senderEmail.",
    };
  }

  if (!validateString(message, 100)) {
    return {
      error: "Invalid stringtype message.",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "My Contact Form: <onboarding@resend.dev>",
      to: "incyberz@yahoo.com",
      subject: "Message From your Online Resume",
      reply_to: senderEmail as string,
      // text: message as string,
      react: (
        <ContactFormEmail
          message={message as string}
          senderEmail={senderEmail as string}
        />
      ),
    });
  } catch (error: unknown) {
    console.log(error);

    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
