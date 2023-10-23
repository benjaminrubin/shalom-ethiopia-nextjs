"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  tripType: string;
  groupSize: string;
  startDate: string;
  endDate: string;
  additionalInfo: string;
};

// Red asterix symbol
const RequiredSymbol: React.FC = () => {
  return <span className='font-bold text-red-600'>*</span>;
};

interface FormLabelProps {
  required?: boolean;
  htmlFor: string;
  helpText?: string;
  children: React.ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({
  helpText,
  required,
  children,
  htmlFor,
}) => {
  return (
    <div className='mb-2'>
      <label htmlFor={htmlFor} className='block font-medium'>
        {children} {required && <RequiredSymbol />}
      </label>
      {helpText && <small>{helpText}</small>}
    </div>
  );
};

const RequestBookingForm: React.FC = () => {
  const [submitLabel, setSubmitLabel] = useState("Submit a Booking Request");
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    //   Disable submit button and change label to "Submitting"
    setSubmitLabel("Submitting...");
    setTimeout(() => {
      setSubmitted(true);
      setSubmitLabel("Submitted!");
    }, 1000);
    // After three seconds display "Submitted!"
  };
  const startDate = watch("startDate", "");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 bg-slate-100 px-3 py-5 border border-gray-300 rounded shadow-lg'
    >
      {/* Full Name Input */}
      <div>
        <FormLabel required htmlFor='fullName'>
          Full Name
        </FormLabel>
        <Controller
          name='fullName'
          control={control}
          rules={{ required: "Full name is required" }}
          render={({ field }) => (
            <input
              {...field}
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          )}
        />
        {errors.fullName && (
          <span className='text-red-500 text-xs'>
            {errors.fullName.message}
          </span>
        )}
      </div>
      {/* Email Address Input */}
      <div>
        <FormLabel required htmlFor='htmlFor'>
          Email Address
        </FormLabel>
        <Controller
          name='email'
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type='email'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          )}
        />
        {errors.email && (
          <span className='text-red-500 text-xs'>{errors.email.message}</span>
        )}
      </div>
      {/* Phone Number */}
      <div>
        <FormLabel htmlFor='phoneNumber' helpText='Please include country code'>
          Phone / WhatsApp Number
        </FormLabel>
        <Controller
          name='phoneNumber'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type='tel'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
          )}
        />
        {errors.phoneNumber && (
          <span className='text-red-500 text-xs'>
            {errors.phoneNumber.message}
          </span>
        )}
      </div>

      <div className='grid grid-cols-2 space-x-4'>
        {/* City / town */}
        <div>
          <FormLabel htmlFor='city'>City / Town</FormLabel>
          <Controller
            name='city'
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type='text'
                className='w-full p=2 border border-gray-300 rounded-md'
              />
            )}
          />
        </div>
        <div>
          <FormLabel htmlFor='country'>Country</FormLabel>
          <Controller
            name='country'
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type='text'
                className='w-full p=2 border border-gray-300 rounded-md'
              />
            )}
          />
        </div>
      </div>

      {/* Trip Type */}
      <div>
        <FormLabel htmlFor='tripType'>
          <div>Select the type of trip you would like to book</div>
          <small className='font-normal'>
            For a breakdown of the tours, please refer to the{" "}
            <Link
              href='/our-tours#types-of-tours'
              target='_blank'
              className='text-blue-600 underline'
            >
              types of tours
            </Link>
          </small>
        </FormLabel>
        <Controller
          name='tripType'
          control={control}
          render={({ field }) => (
            <div className='flex flex-col ml-2'>
              {["Private", "Family", "Group", "Documentary"].map((type) => (
                <label key={type} className='inline-flex items-center'>
                  <input
                    type='radio'
                    {...field}
                    value={type}
                    checked={field.value === type}
                    className='text-blue-500'
                  />
                  <span className='ml-2'>{type}</span>
                </label>
              ))}
            </div>
          )}
        />
      </div>
      {/* Group Size */}
      <div>
        <FormLabel htmlFor='groupSize' helpText='This can be changed later'>
          Select the number of people going on the trip
        </FormLabel>
        <Controller
          name='groupSize'
          control={control}
          render={({ field }) => (
            <div className='flex flex-col ml-2'>
              {[
                "Single Traveler",
                "Couple",
                "3-5 people",
                "More than 5 people",
              ].map((type) => (
                <label key={type} className='inline-flex items-center'>
                  <input
                    type='radio'
                    {...field}
                    value={type}
                    checked={field.value === type}
                    className='text-blue-500'
                  />
                  <span className='ml-2'>{type}</span>
                </label>
              ))}
            </div>
          )}
        />
      </div>
      {/* Trip Dates */}
      <div className='grid grid-cols-2 space-x-4'>
        {/* Start Date */}
        <div>
          <FormLabel htmlFor='startDate'>Start Date</FormLabel>
          <Controller
            name='startDate'
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type='date'
                className='w-full p-2 border border-gray-300 rounded-md '
              />
            )}
          />
          {errors.startDate && (
            <span className='text-red-500 text-xs'>
              {errors.startDate.message}
            </span>
          )}
        </div>
        <div>
          <FormLabel htmlFor='endDate'>End Date</FormLabel>
          <Controller
            name='endDate'
            control={control}
            rules={{
              validate: (value) =>
                !value ||
                new Date(value) >= new Date(startDate) ||
                "End date cannot be before start date",
            }}
            render={({ field }) => (
              <input
                {...field}
                type='date'
                className='w-full p-2 border border-gray-300 rounded-md '
              />
            )}
          />
          {errors.endDate && (
            <span className='text-red-500 text-xs'>
              {errors.endDate.message}
            </span>
          )}
        </div>
      </div>
      {/* Additional Information TextArea */}
      <div>
        <FormLabel htmlFor='additionalInfo'>
          Share any additional information below:
        </FormLabel>
        <Controller
          name='additionalInfo'
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={4}
              cols={5}
              className='w-full p-2 border border-gray-300 rounded-md '
            ></textarea>
          )}
        />
      </div>
      {/* Submit Button */}
      <button
        type='submit'
        disabled={submitted}
        className={`px-4 py-2 bg-blue-500 transition duration-200 ${
          submitted ? "" : "hover:bg-blue-600"
        } rounded text-white text-xl w-full`}
      >
        {submitLabel}
      </button>
      {submitted && (
        <div className='text-center mt-5 w-full text-sm'>
          Your booking request has been submitted! We will reach out to you
          within the next 48 hours.{" "}
        </div>
      )}
    </form>
  );
};

export default RequestBookingForm;
