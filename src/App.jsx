  // import React, { useState } from "react";
  // import { RxCross2 } from "react-icons/rx";
  // import { FaRegBuilding, FaSearch, FaUser } from "react-icons/fa";
  // import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
  // import { ConditionFields } from "./components/ConditionField";
  // import { AddressFields } from "./components/AddressField";
  // import { CompanyFields } from "./components/CompanyField";
  // import { ContactPersonFields } from "./components/ContactPersonField";
  // import { ContactDetailsFields } from "./components/ContactDetailField";
  // import { PaymentDetailsFields } from "./components/PaymentDetailField";
  // import { PersonFields } from "./components/PersonField";
  // import { TabButton } from "./components/TabButton";
  // import { TypeToggle } from "./components/TypeToggle";
  // import { SearchableSelect } from "./components/SearchableSelect";

  // export const App = () => {
  //   const [activeType, setActiveType] = useState("person");
  //   const [activeSection, setActiveSection] = useState("contact-details");

  //   const handleTypeChange = (type) => {
  //     setActiveType(type);

  //     if (type === "person") {
  //       setActiveSection("contact-details");
  //     }

  //     if (type === "company") {
  //       setActiveSection("contact-person");
  //     }
  //   };

  //   return (
  //     <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
  //       <div className="bg-white w-full max-w-7xl rounded-xl border overflow-visible">
  //         {/* Header */}
  //         <div className="flex items-center justify-between p-5">
  //           <h1 className="text-2xl font-semibold text-slate-900">
  //             Create Contact
  //           </h1>

  //           <RxCross2 size={26} className="cursor-pointer text-cyan-900" />
  //         </div>

  //         {/* Top Fields */}
  //         <div
  //           className={`grid gap-4 px-5 pb-5 ${
  //             activeType === "person"
  //               ? "grid-cols-1 md:grid-cols-3"
  //               : "grid-cols-1 md:grid-cols-[1fr_360px]"
  //           }`}
  //         >
  //           <SearchableSelect
  //             label="Category"
  //             placeholder="Select Category"
  //             options={["Customer", "Supplier", "Partner"]}
  //           />

  //           <TypeToggle activeType={activeType} onChange={handleTypeChange} />

  //           {activeType === "person" && (
  //             <SearchableSelect
  //               label="Salutation"
  //               placeholder="Please Select Salutation"
  //               options={[
  //                 "Mister",
  //                 "Women",
  //                 "Family",
  //                 "Spouses",
  //                 "DR.",
  //                 "PROF.",
  //                 "PROF DR.",
  //               ]}
  //             />
  //           )}
  //         </div>

  //         {/* Person / Company Fields */}
  //         <div className="px-5 pb-6">
  //           {activeType === "person" ? <PersonFields /> : <CompanyField />}
  //         </div>

  //         {/* Middle Tabs */}
  //         <div className="px-5 pb-5">
  //           <div className="rounded-xl border border-slate-200 p-1 shadow-sm">
  //             <div
  //               className={`grid gap-2 rounded-xl bg-slate-100 p-1 ${
  //                 activeType === "company"
  //                   ? "grid-cols-1 md:grid-cols-5"
  //                   : "grid-cols-1 md:grid-cols-4"
  //               }`}
  //             >
  //               {activeType === "company" && (
  //                 <TabButton
  //                   title="Contact Person"
  //                   value="contact-person"
  //                   activeValue={activeSection}
  //                   onClick={setActiveSection}
  //                 />
  //               )}

  //               <TabButton
  //                 title="Contact Details"
  //                 value="contact-details"
  //                 activeValue={activeSection}
  //                 onClick={setActiveSection}
  //               />

  //               <TabButton
  //                 title="Address"
  //                 value="address"
  //                 activeValue={activeSection}
  //                 onClick={setActiveSection}
  //               />

  //               <TabButton
  //                 title="Condition"
  //                 value="condition"
  //                 activeValue={activeSection}
  //                 onClick={setActiveSection}
  //               />

  //               <TabButton
  //                 title="Payment Details"
  //                 value="payment-details"
  //                 activeValue={activeSection}
  //                 onClick={setActiveSection}
  //               />
  //             </div>
  //           </div>
  //         </div>

  //         {/* Tab Content */}
  //         <div className="px-5 pb-6">
  //           {activeSection === "contact-person" && activeType === "company" && (
  //             <ContactPersonFields />
  //           )}

  //           {activeSection === "contact-details" && <ContactDetailsFields />}

  //           {activeSection === "address" && <AddressFields />}

  //           {activeSection === "condition" && <ConditionFields />}

  //           {activeSection === "payment-details" && <PaymentDetailsFields />}
  //         </div>

  //         {/* Footer */}
  //         <div className="flex justify-end border-t border-slate-200 p-5">
  //           <button
  //             type="button"
  //             className="flex items-center gap-3 rounded-lg bg-cyan-900 px-5 py-2.5 text-white font-semibold hover:bg-cyan-950 transition"
  //           >
  //             Create
  //             <span className="text-2xl leading-none">+</span>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
