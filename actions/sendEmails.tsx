"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on Server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));

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

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "incyberz@yahoo.com",
    subject: "Message From your Online Resume",
    reply_to: senderEmail,
    text: message,
  });
};
