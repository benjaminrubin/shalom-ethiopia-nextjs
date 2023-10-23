"use client";
import React from "react";
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
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
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
      {/* ...other fields... */}
      <div>
        <FormLabel htmlFor='phoneNumber' helpText='Please include country code'>
          PhoneNumber
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
      <div className='flex space-x-4'>
        {/* ... Start Date */}
        <div>
          <FormLabel htmlFor='startDate'>Start Date</FormLabel>
          <Controller
            name='startDate'
            control={control}
            rules={{
              validate: (value) =>
                !value ||
                new Date(startDate) <= new Date(value) ||
                "Start date must be after end date",
            }}
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
      <div>
        <FormLabel htmlFor='additionalInfo'>
          For any additional information, please share below:
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
      {/* ...other fields... */}
      <button
        type='submit'
        className='px-4 py-2 bg-blue-500 transition duration-200 hover:bg-blue-600 rounded text-white text-xl'
      >
        Submit Request
      </button>
    </form>
  );
};

export default RequestBookingForm;
