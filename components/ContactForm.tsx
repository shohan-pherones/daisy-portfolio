"use client";

import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const formDataSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(3).max(255),
});

type TFormData = z.infer<typeof formDataSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<TFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errorData, setErrorData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      formDataSchema.parse(formData);

      const res = await axios.post("/api/contact", formData);

      if (res) {
        toast.success(res.data);
      } else {
        toast.error("Failed to send message");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setErrorData([]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrorData(error.issues);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const checkErrors = (path: string) => {
    return errorData
      .filter((err) => err.path[0] === path)
      .map((err) => (
        <p key={path} className="text-rose-500">
          {err.message}
        </p>
      ));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* FORM CONTROL */}
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="cursor-pointer">
          First Name
        </label>
        <input
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="border p-2 rounded-lg"
        />
        {checkErrors("firstName")}
      </div>
      {/* FORM CONTROL */}
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName" className="cursor-pointer">
          Last Name
        </label>
        <input
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          className="border p-2 rounded-lg"
        />
        {checkErrors("lastName")}
      </div>
      {/* FORM CONTROL */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="email" className="cursor-pointer">
          Email Address
        </label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="border p-2 rounded-lg"
        />
        {checkErrors("email")}
      </div>
      {/* FORM CONTROL */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="cursor-pointer">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={7}
          id="message"
          name="message"
          placeholder="Write your message"
          className="border p-2 rounded-lg resize-none"
        />
        {checkErrors("message")}
      </div>
      <button type="submit" disabled={isLoading} className="btn btn-primary">
        {isLoading ? <Loader2 className="animate-spin" /> : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
