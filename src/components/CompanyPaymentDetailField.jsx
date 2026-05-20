import { Input } from "./Input";

export const CompanyPaymentDetailsFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  submitCount,
}) => {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Input
          label="IBAN"
          placeholder="Enter Your IBAN Number"
          name="companyIban"
          value={values.companyIban}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.companyIban || submitCount > 0) && errors.companyIban}
        />

        <Input
          label="BIC"
          placeholder="Enter Your BIC Number"
          name="companyBic"
          value={values.companyBic}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.companyBic || submitCount > 0) && errors.companyBic}
        />

        <Input
          label="Bank Name"
          placeholder="Enter Your Bank Name"
          name="companyBankName"
          value={values.companyBankName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            (touched.companyBankName || submitCount > 0) &&
            errors.companyBankName
          }
        />

        <Input
          label="VAT ID"
          placeholder="Enter Your VAT ID"
          name="companyVatId"
          value={values.companyVatId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            (touched.companyVatId || submitCount > 0) &&
            errors.companyVatId
          }
        />
      </div>

      <Input
        label="Debtor"
        placeholder="Enter your Debtor / Creditor Account"
        name="debtor"
        value={values.debtor}
        onChange={handleChange}
        onBlur={handleBlur}
        error={(touched.debtor || submitCount > 0) && errors.debtor}
      />
    </div>
  );
};