import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export default function Contact() {
  const validation = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    phone: yup.string().matches(/^\d{11}$/, 'Phone must be a valid 10-digit number').required('Phone is required'),
    message: yup.string().min(10, 'Message must be at least 10 characters long').required('Message is required'),
  });

  function sendDataToSubmit(values , { resetForm }) {
    console.log(values);
    
    resetForm();  // This is the Formik helper function to reset the form
 
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: sendDataToSubmit,
    validationSchema: validation,
  });

  return (
    <>
      <div className="bg-Dark-Blue text-center p-10 md:p-20">
        <h1 className="text-Peach-Red font-primary font-bold text-3xl md:text-[48px] leading-[40px] md:leading-[58px] cursor-text-hover">
          Contact
        </h1>
        <p className="text-Off-White font-primary font-medium text-lg md:text-[24px] leading-[20px] cursor-text-hover">
          Home / Contact
        </p>
      </div>

      <section className="bg-[#fff5f6] md:p-12 lg:p-20">
        <div className="text-center mt-5 space-y-3">
          <h2 className="text-[#FF3E54] font-bold text-[20px] md:text-[24px] leading-[20px] font-primary cursor-text-hover">
            \ Get In Touch \
          </h2>
          <h1 className="text-[#0E1F51] font-bold text-[28px] md:text-[40px] leading-[30px] md:leading-[40px] font-primary cursor-text-hover">
            Hey! Let’s Talk
          </h1>
        </div>

        {/* Main Section */}
        <section className="flex flex-col lg:flex-row justify-around items-start mt-12">
          {/* Left Form */}
          <form onSubmit={formik.handleSubmit}  noValidate className="w-full lg:w-[750px]">
            <div className="bg-white p-6 rounded-xl space-y-6">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-Off-White w-full h-10 p-4 rounded-md outline-none cursor-text-hover"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                ) : null}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-Off-White w-full h-10 p-4 rounded-md outline-none cursor-text-hover"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel" 
                  placeholder="Phone"
                  className="bg-Off-White w-full h-10 p-4 rounded-md outline-none cursor-text-hover"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                ) : null}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full h-32 bg-Off-White p-4 rounded-md outline-none cursor-text-hover"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="bg-Peach-Red w-full md:w-auto px-7 py-3 text-white rounded-md font-medium text-[16px] leading-[26px] font-primary cursor-hover disabled:opacity-50"
              >
                Send Now
              </button>
            </div>
          </form>

          {/* Right Contact Info */}
          <div className="bg-white p-6 space-y-6 w-full lg:w-[360px] rounded-xl">
            {/* Phone */}
            <div className="flex space-x-3">
              <span className="bg-Off-White w-14 h-14 rounded-xl flex justify-center items-center cursor-hover">
                <i className="fa-solid fa-phone-volume text-2xl text-Peach-Red"></i>
              </span>
              <div>
                <h1 className="text-Peach-Red font-primary font-bold text-[18px] md:text-[20px] leading-[20px] cursor-text-hover">
                  Call Anytime
                </h1>
                <p className="font-primary font-medium text-[14px] md:text-[16px] pt-2 cursor-text-hover">
                  + 91 23678 27867
                </p>
                <p className="font-primary font-medium text-[14px] md:text-[16px] cursor-text-hover">
                  + 91 67678 92878
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex space-x-3">
              <span className="bg-Off-White w-14 h-14 rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-envelope text-2xl text-Peach-Red cursor-hover"></i>
              </span>
              <div>
                <h1 className="text-Peach-Red font-primary font-bold text-[18px] md:text-[20px] leading-[20px] cursor-text-hover">
                  Send Email
                </h1>
                <p className="font-primary font-medium text-[14px] md:text-[16px] pt-2 cursor-text-hover">
                  connect@itfirms.com
                </p>
                <p className="font-primary font-medium text-[14px] md:text-[16px] cursor-text-hover">
                  hello@itfirms.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex space-x-3">
              <span className="bg-Off-White w-14 h-14 rounded-xl flex justify-center items-center cursor-hover">
                <i className="fa-solid fa-location-dot text-2xl text-Peach-Red"></i>
              </span>
              <div>
                <h1 className="text-Peach-Red font-primary font-bold text-[18px] md:text-[20px] leading-[20px] cursor-text-hover">
                  Visit Us
                </h1>
                <p className="font-primary font-medium text-[14px] md:text-[16px] pt-2 cursor-text-hover">
                  20 Island Park Road,
                </p>
                <p className="font-primary font-medium text-[14px] md:text-[16px] cursor-text-hover">
                  New Jearsy, New York, USA
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div className="text-center">
              <h2 className="text-Dark-Blue font-primary font-bold text-[20px] md:text-[24px] leading-[25px] cursor-text-hover">
                Follow us
              </h2>
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                <span className="text-white bg-Peach-Red rounded-xl py-4 px-4 cursor-hover">
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </span>
                <span className="text-white bg-Peach-Red rounded-xl py-4 px-4 cursor-hover">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </span>
                <span className="text-white bg-Peach-Red rounded-xl py-4 px-5 cursor-hover">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </span>
                <span className="text-white bg-Peach-Red rounded-xl py-4 px-4 cursor-hover">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
