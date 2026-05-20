import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";

import { RxCross2 } from "react-icons/rx";

import { ConditionFields } from "./components/ConditionField";
import { AddressFields } from "./components/AddressField";
import { CompanyField } from "./components/CompanyField";
import { ContactPersonField } from "./components/ContactPersonField";
import { PersonContactDetailsField } from "./components/PersonContactDetailField";
import { CompanyContactDetailsField } from "./components/CompanyContactDetailsField";
import { PaymentDetailsFields } from "./components/PaymentDetailField";
import { CompanyPaymentDetailsFields } from "./components/CompanyPaymentDetailField";
import { PersonField } from "./components/PersonField";
import { TabButton } from "./components/TabButton";
import { TypeToggle } from "./components/TypeToggle";
import { SearchableSelect } from "./components/SearchableSelect";

import {
  contactFormInitialValues,
  contactFormValidationSchema,
} from "./validation/FormSchema";

export const Form = () => {
  const [activeType, setActiveType] = useState("person");
  const [activeSection, setActiveSection] = useState("contact-details");

  const handleTypeChange = (type, setFieldValue) => {
    setActiveType(type);
    setFieldValue("activeType", type);
    setTouched({});

    if (type === "person") {
      setActiveSection("contact-details");
    }

    if (type === "company") {
      setActiveSection("contact-person");
    }
  };

  const handleSubmit = (values, actions) => {
    console.log("Submitted values:", values);

    console.table(values);
    actions.resetForm();
    actions.setSubmitting(false);

    // console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={contactFormInitialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        submitCount,
        setTouched,
      }) => (
        <FormikForm>
          <pre className="m-5 rounded bg-gray-100 p-4 text-xs text-red-600">
            {JSON.stringify({ values, errors, submitCount }, null, 2)}
          </pre>
          <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
            <div className="bg-white w-full max-w-7xl rounded-xl border overflow-visible">
              {/* Header */}
              <div className="flex items-center justify-between p-5">
                <h1 className="text-2xl font-semibold text-slate-900">
                  Create Contact
                </h1>

                <RxCross2 size={26} className="cursor-pointer text-cyan-900" />
              </div>

              {/* Top Fields */}
              <div
                className={`grid gap-4 px-5 pb-5 ${
                  activeType === "person"
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-[1fr_360px]"
                }`}
              >
                <SearchableSelect
                  name="category"
                  label="Category"
                  placeholder="Select Category"
                  options={["Customer", "Supplier", "Partner"]}
                  value={values.category}
                  onChange={(value) => setFieldValue("category", value)}
                  error={touched.category && errors.category}
                />

                <TypeToggle
                  activeType={activeType}
                  onChange={(type) =>
                    handleTypeChange(type, setFieldValue, setTouched)
                  }
                />

                {activeType === "person" && (
                  <SearchableSelect
                    name="salutation"
                    label="Salutation"
                    placeholder="Please Select Salutation"
                    options={[
                      "Mister",
                      "Women",
                      "Family",
                      "Spouses",
                      "DR.",
                      "PROF.",
                      "PROF DR.",
                    ]}
                    value={values.salutation}
                    onChange={(value) => setFieldValue("salutation", value)}
                    error={touched.salutation && errors.salutation}
                  />
                )}
              </div>

              {/* Person / Company Fields */}
              <div className="px-5 pb-6">
                {activeType === "person" ? (
                  <PersonField
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                ) : (
                  <CompanyField
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                  />
                )}
              </div>

              {/* Middle Tabs */}
              <div className="px-5 pb-5">
                <div className="rounded-xl border border-slate-200 p-1 shadow-sm">
                  <div
                    className={`grid gap-2 rounded-xl bg-slate-100 p-1 ${
                      activeType === "company"
                        ? "grid-cols-1 md:grid-cols-5"
                        : "grid-cols-1 md:grid-cols-4"
                    }`}
                  >
                    {activeType === "company" && (
                      <TabButton
                        title="Contact Person"
                        value="contact-person"
                        activeValue={activeSection}
                        onClick={setActiveSection}
                      />
                    )}

                    <TabButton
                      title="Contact Details"
                      value="contact-details"
                      activeValue={activeSection}
                      onClick={setActiveSection}
                    />

                    <TabButton
                      title="Address"
                      value="address"
                      activeValue={activeSection}
                      onClick={setActiveSection}
                    />

                    <TabButton
                      title="Condition"
                      value="condition"
                      activeValue={activeSection}
                      onClick={setActiveSection}
                    />

                    <TabButton
                      title="Payment Details"
                      value="payment-details"
                      activeValue={activeSection}
                      onClick={setActiveSection}
                    />
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="px-5 pb-6">
                {activeSection === "contact-person" &&
                  activeType === "company" && (
                    <ContactPersonField
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                    />
                  )}

                {activeSection === "contact-details" &&
                  (activeType === "company" ? (
                    <CompanyContactDetailsField
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                    />
                  ) : (
                    <PersonContactDetailsField
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                    />
                  ))}

                {activeSection === "address" && (
                  <AddressFields
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                  />
                )}

                {activeSection === "condition" && (
                  <ConditionFields
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFieldValue={setFieldValue}
                  />
                )}

                {activeSection === "payment-details" &&
                  (activeType === "company" ? (
                    <CompanyPaymentDetailsFields
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                    />
                  ) : (
                    <PaymentDetailsFields
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFieldValue={setFieldValue}
                    />
                  ))}
              </div>

              {/* Footer */}
              <div className="flex justify-end border-t border-slate-200 p-5">
                <button
                  type="submit"
                  className="flex items-center gap-3 rounded-lg bg-cyan-900 px-5 py-2.5 text-white font-semibold hover:bg-cyan-950 transition"
                >
                  Create
                  <span className="text-2xl leading-none">+</span>
                </button>
              </div>
            </div>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
