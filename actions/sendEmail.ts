"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { renderAsync } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const html = await renderAsync(
    ContactFormEmail({
      message: message as string,
      senderEmail: senderEmail as string,
    }) as React.ReactElement
  );

  let data;
  try {
    console.log("sending");
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vinzu24@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      html: html,
    });
  } catch (error: unknown) {
    console.log(error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
