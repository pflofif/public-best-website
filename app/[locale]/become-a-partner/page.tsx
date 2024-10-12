"use client"
import { maruipol_bold, inter } from "../../fonts/fonts";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { generateMessage } from "../../hooks/generateEmail";

const validationSchema = Yup.object({
  company_message: Yup.string().required("Required"),
  company_email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
});



interface FormInputProps {
  name: string;
  type?: string;
  placeholder: string;
  /** @ts-expect-error */
  formik: FormikProps<any>; // Adjust the generic type based on your form values
  ref?: React.RefObject<HTMLInputElement>; // Use React.RefObject for the input ref
}

const FormInput: React.FC<FormInputProps> = ({ name, type = "text", placeholder, formik, ref }) => (
  <div className="relative py-2 w-full">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full mt-4 p-5 border-2 border-gray-300 focus:border-best-blue text-lg bg-transparent rounded-xl min-w-[200px] md:min-w-[400px] lg:min-w-[600px]"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      ref={ref}
    />
    {formik.touched[name] && formik.errors[name] ? (
      <div className="absolute text-red-400 left-0 -bottom-4 text-sm">
        {formik.errors[name]}
      </div>
    ) : null}
  </div>
);


interface SubmitButtonProps {
  isValid: boolean;
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isValid, isSubmitting }) => (
  <button
    disabled={!isValid || isSubmitting}
    className={`${maruipol_bold.className} rounded-3xl bg-best-yellow hover:scale-105 duration-500 w-full text-best-blue px-10 py-4 my-5 self-center text-md`}
    type="submit"
  >
    Відправити
  </button>
);

const BecomeAPartner = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleForm = (result: any) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

    const stringEmail = generateMessage(result.company_name);

    const templateParams = {
      company_email: result.company_email,
      message: stringEmail,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const formik = useFormik({
    initialValues: {
      company_message: "",
      company_email: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleForm(values);
      resetForm();
    },
  });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center max-w-7xl w-full px-6 mx-auto gap-8 pt-48">
      <h2
        className={`${maruipol_bold.className} text-hack-green text-4xl lg:text-5xl my-2 text-center relative`}
      >
        <span>Стати</span>{" "}
        <span className="text-best-blue">Партнером</span>
        <Image
          src="/partners_line.svg"
          width={292}
          height={102}
          className="absolute -bottom-6 lg:-bottom-10 right-0 w-36 lg:w-52 -z-10"
          alt=" "
        />
      </h2>
      <p
        className={`${inter.className} text-best-gray md:text-lg text-md my-2 text-center max-w-2xl`}
      >
        Якщо ви бажаєте долучитися до наших проєктів або отримати більше
        інформації про актуальні можливості співпраці, будь ласка, зв'яжіться з
        нами та залиште свої контакти
      </p>
      <div className="w-full max-w-5xl flex justify-center">
        <div className="flex flex-col gap-5">
          <form
            className="w-full flex flex-col md:flex-row gap-4 lg:gap-10"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col w-full">
              <FormInput
                name="company_email"
                type="email"
                placeholder="Enter your email"
                formik={formik}
              />
              <FormInput
                ref={inputRef}
                name="company_massage"
                placeholder="Write your message"
                formik={formik}
              />
              <SubmitButton
                isValid={formik.isValid}
                isSubmitting={formik.isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
      <Image
        src="/Partners_bg.svg"
        layout="fill"
        objectFit="cover"
        className="w-full h-full -z-20 opacity-100"
        alt=""
      />
      <Image
        src="/Partners_bg.svg"
        layout="fill"
        objectFit="cover"
        className="w-full h-full -z-20 opacity-100"
        alt=""
      />
      <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute bottom-2 md:bottom-24 right-2 md:right-24 w-12 w-8 -z-10"
        alt=" "
      />
      <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute top-48 left-24 md:left-72 w-8 md:w-12 -z-10 rotate-45"
        alt=" "
      />
      <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute top-72 right-48 md:right-96 w-6 md:w-8 -z-10 rotate-90"
        alt=" "
      />
      <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute top-48 left-24 md:left-72 w-8 md:w-12 -z-10 rotate-45"
        alt=" "
      />
      <Image
        src="/stars.svg"
        width={292}
        height={102}
        className="absolute top-72 right-48 md:right-96 w-6 md:w-8 -z-10 rotate-90"
        alt=" "
      />
    </section>
  );
};

export default BecomeAPartner;
