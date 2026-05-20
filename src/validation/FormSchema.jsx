import * as Yup from "yup";
export const contactFormInitialValues = {
  activeType: "person",

  // Common top fields
  category: "",

  // Person fields
  salutation: "",
  firstName: "",
  lastName: "",
  customerNumber: "",
  position: "",

  // Company fields
  companyName: "",
  companyDomain: "",

  // Company contact person
  contactPersonSalutation: "",
  contactPersonFurtherSalutation: "",
  contactPersonFirstName: "",
  contactPersonLastName: "",

  // Common contact details
  email: "",
  reachability: "",
  source: "",
  landline: "",
  mobilePhone: "",
  website: "",
  fax: "",
  birthDate: "",

  // Address fields
  streetHouseNumber: "",
  postalCode: "",
  location: "",
  country: "",

  // Condition fields
  paymentTermDays: "",
  discount: "",
  discountTargetDays: "",
  salesPriceGroup: "",

  // Person payment fields
  iban: "",
  bic: "",
  bankName: "",
  vatId: "",

  // Company payment fields
  companyIban: "",
  companyBic: "",
  companyBankName: "",
  companyVatId: "",
  debtor: "",
};

export const contactFormValidationSchema = Yup.object({
  activeType: Yup.string().required(),

  // common field
  category: Yup.string().required("Category is required"),

  // PERSON ONLY
  salutation: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("Salutation is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  firstName: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("First name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  lastName: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("Last name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  customerNumber: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("Customer number is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  position: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("Position is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // COMPANY ONLY
  companyName: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Company name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  companyDomain: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Company domain is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  contactPersonSalutation: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Contact person salutation is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  contactPersonFirstName: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Contact person first name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  contactPersonLastName: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Contact person last name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  reachability: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Reachability is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  source: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Source is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // COMMON CONTACT DETAILS
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  landline: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Invalid landline number")
    .notRequired(),

  mobilePhone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Invalid mobile number")
    .notRequired(),

  website: Yup.string()
    .transform((value) => (value === "" ? undefined : value))
    .url("Invalid website URL")
    .notRequired(),

  fax: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Invalid fax number")
    .notRequired(),

  birthDate: Yup.date()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .notRequired(),

  // ADDRESS common rakhni ho to required rakho
  streetHouseNumber: Yup.string().required("Street / house number is required"),

  postalCode: Yup.string().required("Postal code is required"),

  location: Yup.string().required("Location is required"),

  country: Yup.string().required("Country is required"),

  // CONDITION common
  paymentTermDays: Yup.number()
    .typeError("Payment term must be a number")
    .required("Payment term is required"),

  discount: Yup.number()
    .typeError("Discount must be a number")
    .required("Discount is required"),

  discountTargetDays: Yup.number()
    .typeError("Discount target must be a number")
    .required("Discount target is required"),

  // salesPriceGroup: Yup.string().required("Sales price group is required"),

  // PERSON PAYMENT
  iban: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("IBAN is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  bic: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("BIC is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  bankName: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("Bank name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  vatId: Yup.string().when("activeType", {
    is: "person",
    then: (schema) => schema.required("VAT ID is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  // COMPANY PAYMENT
  companyIban: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("IBAN is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  companyBic: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("BIC is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  companyBankName: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Bank name is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  companyVatId: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("VAT ID is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  debtor: Yup.string().when("activeType", {
    is: "company",
    then: (schema) => schema.required("Debtor is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
