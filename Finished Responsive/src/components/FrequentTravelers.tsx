import { MouseEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import Checkmark from "./icons/Checkmark";
import { insertLead } from "../api/api";

export default function FrequentTravelers() {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation({ emailAddress: "", fullName: "" });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: async () =>
      await insertLead({
        createdAt: Date.now(),
        fullName: values.fullName,
        emailAddress: values.emailAddress,
      }),
    onSuccess: () => {
      resetForm();
      setErrorMessage(null);
    },
    onError: (err: Error) => setErrorMessage(err.message),
  });

  async function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (isChecked && isValid) {
      mutation.mutate();
    }
  }

  return (
    <section className="bg-primary-100 px-24 py-36">
      <div className="border-y-grey-500/40 m-auto flex max-w-389 justify-between border-y-1 py-26">
        <div className="basis-150 text-center">
          <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">
            Learn About Our Frequent Traveler Program
          </h3>
          <p className="text-grey-800 text-base/14">
            Interested in saving up to $1000 on your next vacation? How about
            earning travel points that can be converted into rewards like extra
            nights, free meals, and exclusive offers from resorts around globe?
          </p>
        </div>
        <div className="bg-grey-500/40 block w-0.25 self-stretch" />
        <form className="flex basis-150 flex-col">
          <label className="mb-8">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">
              Full Name
            </p>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              minLength={2}
              maxLength={50}
              required
              placeholder="Jane Doe"
              className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light ${errors.name && "outline-red"}`}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-red pt-1 pl-0.5 text-sm"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </label>
          <label className="mb-12">
            <p className="tracking-6 mb-3 text-lg/9.5 font-semibold">Email</p>
            <input
              type="email"
              name="emailAddress"
              value={values.emailAddress}
              onChange={handleChange}
              minLength={3}
              maxLength={50}
              required
              placeholder="janedoe@gmail.com"
              className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light ${errors.email && "outline-red"}`}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-red pt-1 pl-0.5 text-sm"
                >
                  {errors.email}
                </motion.p>
              )}
            </AnimatePresence>
          </label>
          {errorMessage && <p className="text-red text-sm">{errorMessage}</p>}
          <div className="flex items-center justify-between">
            <label className="text-grey-800 flex cursor-pointer items-center gap-x-1.5">
              <button
                className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-xs bg-white p-1"
                type="button"
                onClick={() => setIsChecked((c) => !c)}
              >
                <Checkmark
                  className={`transition-all duration-200 ${isChecked ? "visible h-3 w-3 opacity-100" : "invisible h-2 w-2 opacity-0"}`}
                />
              </button>
              <p className="text-sm tracking-[.03rem]">
                Agree to receive promotional email updates
              </p>
            </label>
            <button
              className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200"
              onClick={handleSubmit}
            >
              {mutation.isPending ? "Submitting..." : "Learn More"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
