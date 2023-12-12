"use client";

import { Button } from "@/components/ui/button";
import TitlePage from "@/components/TitlePage";
import Image from "next/image";
import { Toaster, toast, useToaster } from "react-hot-toast";
import React from "react";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import contactImage from "../../../public/images/contact.svg";
import Reveal from "@/components/Reveal";

const contactFormSchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  message: z
    .string()
    .min(1, "Mensagem muito curta")
    .max(500, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section
      className="w-full h-auto md:p-10 lg:p-10 xl:p-0 flex lg:h-[100vh] flex-col"
      id="contact"
    >
      <TitlePage text="Contato" />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5">
        <div className="w-full flex items-center justify-center">
          <Reveal>
            <Image src={contactImage} alt="contato" />
          </Reveal>
        </div>

        <Reveal>
          <div className="w-full backdrop-blur-md dark:bg-[#192533]/30 bg-[#c4c4c4]/20 p-3 rounded-2xl dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)] mb-10">
            <div className="text-center mt-2">
              <h3 className="text-4xl font-bold">Entre em contato</h3>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 w-full flex flex-col"
            >
              <input
                type="text"
                placeholder="Nome"
                className="w-full h-14 placeholder:text-gray-400 p-4 rounded-lg outline-none dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
                {...register("name", { required: true })}
              />

              <input
                type="email"
                placeholder="E-mail"
                className="w-full h-14 mt-4 placeholder:text-gray-400 p-4 rounded-lg outline-none dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
                {...register("email", { required: true })}
              />

              <textarea
                placeholder="Mensagem"
                className="resize-none w-full mt-4 h-[200px] placeholder:text-gray-400  p-4 rounded-lg outline-none dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
                maxLength={500}
                {...register("message", { required: true })}
              />
              <div className="w-full flex justify-end items-center py-4">
                <Button
                  type="submit"
                  className="w-full lg:w-[15rem] h-12 dark:bg-[#9bb3cb] dark:text-white dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
                  disabled={isSubmitting}
                >
                  <Mail className="mr-2" />
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
