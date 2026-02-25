// // src/components/PersonalDetailsTab.jsx
// import React, { useEffect , useState } from "react";
// import Select from "react-select";

// const classOptions = [
//   { value: "PP1", label: "PP1" },
//   { value: "PP2", label: "PP2" },
//   { value: "I", label: "I" },
//   { value: "II", label: "II" },
//   { value: "III", label: "III" },
//   { value: "IV", label: "IV" },
//   { value: "V", label: "V" },
//   { value: "VI", label: "VI" },
//   { value: "VII", label: "VII" },
//   { value: "VIII", label: "VIII" },
//   { value: "IX", label: "IX" },
//   { value: "X", label: "X" },
//   { value: "XI", label: "XI" },
//   { value: "XII", label: "XII" },
// ];


// const calculateAge = (dob, testDate) => {
//   const birthDate = new Date(dob);
//   const testingDate = new Date(testDate);

//   let age = testingDate.getFullYear() - birthDate.getFullYear();
//   const m = testingDate.getMonth() - birthDate.getMonth();

//   if (m < 0 || (m === 0 && testingDate.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// };

// const PersonalDetailsTab = ({
//   register,
//   watch,
//   errors,
//   setValue,
//   age,
//   setAge,
//   setActiveTab,
//   isValid,
//   trigger, // Add trigger to destructuring
// }) => {
//   const dob = watch("dob");
//   const dateOfTesting = watch("dateOfTesting");

//   const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
//   const [isNextButtonPressed, setIsNextButtonPressed] = useState(false);

//   // Ref for the tab container to query focusable elements
//   const tabRef = React.useRef(null);

//   // Handle Enter key navigation
//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       const formElements = Array.from(
//         tabRef.current.querySelectorAll('input:not([type="hidden"]), select')
//       );
//       const index = formElements.indexOf(event.target);
//       if (index > -1 && index < formElements.length - 1) {
//         formElements[index + 1].focus();
//       }
//     }
//   };

//   // Whenever dob or dateOfTesting changes, update age
//   useEffect(() => {
//     if (dob && dateOfTesting) {
//       const computedAge = calculateAge(dob, dateOfTesting);
//       localStorage.setItem("childAge", computedAge);
//       setAge(computedAge);
//     }
//   }, [dob, dateOfTesting, setAge]);

//   return (
//     <div className="space-y-6" ref={tabRef}> {/* Attach ref to the main div */}
//       {/* Name */}
//       <div className="flex flex-col">
//         <label htmlFor="name" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
//           Name {errors.name && <span className="text-red-500">*</span>}
//         </label>
//         <input
//           id="name"
//           type="text"
//           placeholder="Enter your name"
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: errors.name ? 'red' : 'var(--medium-gray)',
//           }}
//           {...register("name", { required: true })}
//           autoComplete="name"
//           onKeyDown={handleKeyDown}
//           onBlur={async (e) => {
//             setValue('name', e.target.value, { shouldValidate: true });
//           }} // Trigger validation on blur
//         />
//       </div>

//       {/* Gender */}
//       <div className="flex flex-col">
//         <label htmlFor="gender" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
//           Gender {errors.gender && <span className="text-red-500">*</span>}
//         </label>
//         <select
//           id="gender"
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: errors.gender ? 'red' : 'var(--medium-gray)',
//           }}
//           {...register("gender", { required: true })}
//           onKeyDown={handleKeyDown}
//           onChange={async (e) => { // Trigger validation on change
//             setValue('gender', e.target.value, { shouldValidate: true });
//           }}
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       {/* Date of Birth */}
//       <div className="flex flex-col">
//         <label htmlFor="dob" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
//           Date of Birth {errors.dob && <span className="text-red-500">*</span>}
//         </label>
//         <input
//           id="dob"
//           type="date"
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: errors.dob ? 'red' : 'var(--medium-gray)',
//           }}
//           {...register("dob", { required: true })}
//           autoComplete="bday"
//           onKeyDown={handleKeyDown}
//           onBlur={async (e) => {
//             setValue('dob', e.target.value, { shouldValidate: true });
//           }} // Trigger validation on blur
//         />
//       </div>

//       {/* Date of Testing */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="dateOfTesting"
//           className="text-base font-medium" style={{ color: 'var(--text-gray)' }}
//         >
//           Date of Testing {errors.dateOfTesting && <span className="text-red-500">*</span>}
//         </label>
//         <input
//           id="dateOfTesting"
//           type="date"
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: errors.dateOfTesting ? 'red' : 'var(--medium-gray)',
//           }}
//           {...register("dateOfTesting", {
//             required: true,
//           })}
//           onKeyDown={handleKeyDown}
//           onBlur={async (e) => {
//             setValue('dateOfTesting', e.target.value, { shouldValidate: true });
//           }} // Trigger validation on blur
//         />
//       </div>

//       {/* Age (Read-only, so no onKeyDown needed directly for navigation) */}
//       <div className="flex flex-col">
//         <label htmlFor="age" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
//           Age
//         </label>
//         <input
//           id="age"
//           type="text"
//           value={age ? `${age} years` : ""}
//           readOnly
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: 'var(--medium-gray)',
//           }}
//           onKeyDown={handleKeyDown}
//         />
//       </div>
//      {/* Class */}
// <div className="flex flex-col">
//   <label htmlFor="class" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
//     Class {errors.class && <span className="text-red-500">*</span>}
//   </label>
//   <select
//     id="class"
//     className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//     style={{
//       color: 'var(--dark-gray)',
//       borderColor: errors.class ? 'red' : 'var(--medium-gray)',
//     }}
//     {...register("class", { required: true })}
//     onKeyDown={handleKeyDown}
//     onChange={async (e) => {
//       setValue('class', e.target.value, { shouldValidate: true });
//     }}
//   >
//     <option value="">Select Class</option>
//     {classOptions.map((option) => (
//       <option key={option.value} value={option.value}>
//         {option.label}
//       </option>
//     ))}
//   </select>
// </div>

//       {/* Informant */}
//       <div className="flex flex-col">
//         <label
//           htmlFor="informant"
//           className="text-base font-medium" style={{ color: 'var(--text-gray)' }}
//         >
//           Informant {errors.informant && <span className="text-red-500">*</span>}
//         </label>
//         <select
//           id="informant"
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: errors.informant ? 'red' : 'var(--medium-gray)',
//           }}
//           {...register("informant", { required: true })}
//           onKeyDown={handleKeyDown}
//           onChange={async (e) => { // Trigger validation on change
//             setValue('informant', e.target.value, { shouldValidate: true });
//           }}
//         >
//           <option value="">Select Informant</option>
//           <option value="father">Father</option>
//           <option value="mother">Mother</option>
//           <option value="grand-parent">Grand Parent</option>
//           <option value="guardian">Guardian</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       {/* School Name */}
//       <div className="flex flex-col">
//         <label htmlFor="school" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
//           School Name {errors.school && <span className="text-red-500">*</span>}
//         </label>
//         <input
//           id="school"
//           type="text"
//           placeholder="Enter school name"
//           className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
//           style={{
//             color: 'var(--dark-gray)',
//             borderColor: errors.school ? 'red' : 'var(--medium-gray)',
//           }}
//           {...register("school", { required: true })}
//           autoComplete="off"
//           onKeyDown={handleKeyDown}
//           onBlur={async (e) => {
//             setValue('school', e.target.value, { shouldValidate: true });
//           }} // Trigger validation on blur
//         />
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-end">
//         <button
//           type="button"
//           className="px-4 py-2 rounded-lg"
//           style={{
//             backgroundColor: isNextButtonPressed ? '#7f1616' : (isNextButtonHovered ? '#a82a2a' : '#9b1c1c'), // Red for next button, explicit hex
//             color: 'white',
//             transition: 'background-color 0.2s ease, transform 0.1s ease',
//             transform: isNextButtonPressed ? 'scale(0.98)' : 'scale(1)',
//           }}
//           onClick={async () => {
//             const result = await trigger(["name", "gender", "dob", "dateOfTesting", "class", "informant", "school"]);
//             if (result) {
//               setActiveTab("tab2");
//             }
//           }}
//           disabled={!isValid}
//           onKeyDown={handleKeyDown}
//           onMouseEnter={() => setIsNextButtonHovered(true)}
//           onMouseLeave={() => setIsNextButtonHovered(false)}
//           onMouseDown={() => setIsNextButtonPressed(true)}
//           onMouseUp={() => setIsNextButtonPressed(false)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PersonalDetailsTab;
// src/components/PersonalDetailsTab.jsx
import React, { useEffect , useState } from "react";
import Select from "react-select";

const classOptions = [
  { value: "PP1", label: "PP1" },
  { value: "PP2", label: "PP2" },
  { value: "I", label: "I" },
  { value: "II", label: "II" },
  { value: "III", label: "III" },
  { value: "IV", label: "IV" },
  { value: "V", label: "V" },
  { value: "VI", label: "VI" },
  { value: "VII", label: "VII" },
  { value: "VIII", label: "VIII" },
  { value: "IX", label: "IX" },
  { value: "X", label: "X" },
  { value: "XI", label: "XI" },
  { value: "XII", label: "XII" },
];


const calculateAge = (dob, testDate) => {
  const birthDate = new Date(dob);
  const testingDate = new Date(testDate);

  let age = testingDate.getFullYear() - birthDate.getFullYear();
  const m = testingDate.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && testingDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const PersonalDetailsTab = ({
  register,
  watch,
  errors,
  setValue,
  age,
  setAge,
  setActiveTab,
  isValid,
  trigger, // Add trigger to destructuring
}) => {
  const dob = watch("dob");
  const dateOfTesting = watch("dateOfTesting");

  const [isNextButtonHovered, setIsNextButtonHovered] = useState(false);
  const [isNextButtonPressed, setIsNextButtonPressed] = useState(false);
  // complaints with autocomplete
  const [complaints, setComplaints] = useState([]);
  const [complaintInput, setComplaintInput] = useState("");
  // informant and school selectors
  const [informantOther, setInformantOther] = useState("");
  const [schoolOther, setSchoolOther] = useState("");
  const schoolOptions = [
    { value: "St. Xavier School", label: "St. Xavier School" },
    { value: "DPS", label: "Delhi Public School" },
    { value: "Green Valley High", label: "Green Valley High" },
    { value: "Sunrise Academy", label: "Sunrise Academy" },
  ];
  // Ref for the tab container to query focusable elements
  const tabRef = React.useRef(null);

  // Handle Enter key navigation
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const formElements = Array.from(
        tabRef.current.querySelectorAll('input:not([type="hidden"]), select')
      );
      const index = formElements.indexOf(event.target);
      if (index > -1 && index < formElements.length - 1) {
        formElements[index + 1].focus();
      }
    }
  };

  // Whenever dob or dateOfTesting changes, update age
  useEffect(() => {
    if (dob && dateOfTesting) {
      const computedAge = calculateAge(dob, dateOfTesting);
      localStorage.setItem("childAge", computedAge);
      setAge(computedAge);
    }
  }, [dob, dateOfTesting, setAge]);
  
  useEffect(() => {
  setValue("complaints", complaints);
}, [complaints, setValue]);


  return (
    <div className="space-y-6" ref={tabRef}> {/* Attach ref to the main div */}
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
          Name {errors.name && <span className="text-red-500">*</span>}
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: errors.name ? 'red' : 'var(--medium-gray)',
          }}
          {...register("name", { required: true })}
          autoComplete="name"
          onKeyDown={handleKeyDown}
          onBlur={async (e) => {
            setValue('name', e.target.value, { shouldValidate: true });
          }} // Trigger validation on blur
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col">
        <label htmlFor="gender" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
          Gender {errors.gender && <span className="text-red-500">*</span>}
        </label>
        <select
          id="gender"
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: errors.gender ? 'red' : 'var(--medium-gray)',
          }}
          {...register("gender", { required: true })}
          onKeyDown={handleKeyDown}
          onChange={async (e) => { // Trigger validation on change
            setValue('gender', e.target.value, { shouldValidate: true });
          }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Date of Birth */}
      <div className="flex flex-col">
        <label htmlFor="dob" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
          Date of Birth {errors.dob && <span className="text-red-500">*</span>}
        </label>
        <input
          id="dob"
          type="date"
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: errors.dob ? 'red' : 'var(--medium-gray)',
          }}
          {...register("dob", { required: true })}
          autoComplete="bday"
          onKeyDown={handleKeyDown}
          onBlur={async (e) => {
            setValue('dob', e.target.value, { shouldValidate: true });
          }} // Trigger validation on blur
        />
      </div>

      {/* Date of Testing */}
      <div className="flex flex-col">
        <label
          htmlFor="dateOfTesting"
          className="text-base font-medium" style={{ color: 'var(--text-gray)' }}
        >
          Date of Testing {errors.dateOfTesting && <span className="text-red-500">*</span>}
        </label>
        <input
          id="dateOfTesting"
          type="date"
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: errors.dateOfTesting ? 'red' : 'var(--medium-gray)',
          }}
          {...register("dateOfTesting", {
            required: true,
          })}
          onKeyDown={handleKeyDown}
          onBlur={async (e) => {
            setValue('dateOfTesting', e.target.value, { shouldValidate: true });
          }} // Trigger validation on blur
        />
      </div>

      {/* Age (Read-only, so no onKeyDown needed directly for navigation) */}
      <div className="flex flex-col">
        <label htmlFor="age" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
          Age
        </label>
        <input
          id="age"
          type="text"
          value={age ? `${age} years` : ""}
          readOnly
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: 'var(--medium-gray)',
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
     {/* Class */}
<div className="flex flex-col">
  <label htmlFor="class" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
    Class {errors.class && <span className="text-red-500">*</span>}
  </label>
  <select
    id="class"
    className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
    style={{
      color: 'var(--dark-gray)',
      borderColor: errors.class ? 'red' : 'var(--medium-gray)',
    }}
    {...register("class", { required: true })}
    onKeyDown={handleKeyDown}
    onChange={async (e) => {
      setValue('class', e.target.value, { shouldValidate: true });
    }}
  >
    <option value="">Select Class</option>
    {classOptions.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</div>

      {/* Informant */}
      <div className="flex flex-col">
        <label
          htmlFor="informantSelect"
          className="text-base font-medium" style={{ color: 'var(--text-gray)' }}
        >
          Informant {errors.informantSelect && <span className="text-red-500">*</span>}
        </label>
        <select
          id="informantSelect"
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: errors.informantSelect ? 'red' : 'var(--medium-gray)',
          }}
          {...register("informantSelect", { required: true })}
          onKeyDown={handleKeyDown}
          onChange={async (e) => { // Trigger validation on change
            setValue('informantSelect', e.target.value, { shouldValidate: true });
          }}
        >
          <option value="">Select Informant</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="parents">Parents</option>
          <option value="grand-parent">Grand Parent</option>
          <option value="guardian">Guardian</option>
          <option value="other">Other</option>
        </select>
      </div>
      {watch("informantSelect") === "other" && (
        <div className="flex flex-col">
          <label htmlFor="informantOther" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
            Please specify informant {errors.informantOther && <span className="text-red-500">*</span>}
          </label>
          <input
            id="informantOther"
            type="text"
            placeholder="e.g. caretaker, warden"
            {...register("informantOther", { required: true })}
            className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg"
            style={{
              color: 'var(--dark-gray)',
              borderColor: errors.informantOther ? 'red' : 'var(--medium-gray)',
            }}
            onBlur={async (e) => {
              setInformantOther(e.target.value);
            }}
          />
        </div>
      )}

      {/* School Name */}
      <div className="flex flex-col">
        <label htmlFor="schoolSelect" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
          School Name {errors.schoolSelect && <span className="text-red-500">*</span>}
        </label>
        <select
          id="schoolSelect"
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200"
          style={{
            color: 'var(--dark-gray)',
            borderColor: errors.schoolSelect ? 'red' : 'var(--medium-gray)',
          }}
          {...register("schoolSelect", { required: true })}
          onKeyDown={handleKeyDown}
          onChange={async (e) => {
            setValue('schoolSelect', e.target.value, { shouldValidate: true });
          }}
        >
          <option value="">Select School</option>
          {schoolOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>
      {watch("schoolSelect") === "other" && (
        <div className="flex flex-col">
          <label htmlFor="schoolOther" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
            Please enter school name {errors.schoolOther && <span className="text-red-500">*</span>}
          </label>
          <input
            id="schoolOther"
            type="text"
            placeholder="Enter school name"
            {...register("schoolOther", { required: true })}
            className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg"
            style={{
              color: 'var(--dark-gray)',
              borderColor: errors.schoolOther ? 'red' : 'var(--medium-gray)',
            }}
            onBlur={async (e) => {
              setSchoolOther(e.target.value);
            }}
          />
        </div>
      )}
{/* Complaints (Display Only, No localStorage) */}
      <div className="flex flex-col">
        <label htmlFor="complaints" className="text-base font-medium" style={{ color: "var(--text-gray)" }}>
          Presenting Complaints / Issues
        </label>

        {/* Selected complaints as tags */}
        <div className="flex flex-wrap gap-2 mt-2 mb-2">
          {complaints.map((c, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              <span className="text-sm">{c}</span>
              <button
                type="button"
                onClick={() => {
                  const newComplaints = complaints.filter((cc) => cc !== c);
                  setComplaints(newComplaints);
                }}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Input with dropdown */}
        <div className="relative">
          <input
            id="complaints"
            type="text"
            value={complaintInput}
            onChange={(e) => setComplaintInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (complaintInput && !complaints.includes(complaintInput.trim())) {
                  setComplaints([...complaints, complaintInput.trim()]);
                }
                setComplaintInput("");
              }
            }}
            placeholder="Type or select complaint"
            className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg"
            style={{
              color: "var(--dark-gray)",
              borderColor: "var(--medium-gray)",
            }}
          />

          {/* Dropdown list */}
          {complaintInput && (
            <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow">
              {[
                "Difficulty in concentration",
                "Poor handwriting",
                "Reading problems",
                "Spelling mistakes",
                "Difficulty in following instructions",
                "Memory issues",
              ]
                .filter(
                  (opt) =>
                    opt.toLowerCase().includes(complaintInput.toLowerCase()) &&
                    !complaints.includes(opt)
                )
                .map((opt, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setComplaints([...complaints, opt]);
                      setComplaintInput("");
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {opt}
                  </li>
                ))}

              {/* Option to add custom complaint */}
              {![
                "Difficulty in concentration",
                "Poor handwriting",
                "Reading problems",
                "Spelling mistakes",
                "Difficulty in following instructions",
              ].some(
                (opt) => opt.toLowerCase() === complaintInput.toLowerCase()
              ) && (
                <li
                  onClick={() => {
                    setComplaints([...complaints, complaintInput]);
                    setComplaintInput("");
                  }}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 cursor-pointer"
                >
                  Add "{complaintInput}"
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      {/* Background / Behaviour - optional free text */}
      <div className="flex flex-col">
        <label htmlFor="backgroundObservation" className="text-base font-medium" style={{ color: 'var(--text-gray)' }}>
          Background &amp; Behavioural Observations
        </label>
        <textarea
          id="backgroundObservation"
          rows={3}
          className="block w-full px-4 py-3 mt-2 text-base text-gray-900 border rounded-lg transition-all duration-200 resize-none"
          style={{
            color: 'var(--dark-gray)',
            borderColor: 'var(--medium-gray)',
          }}
          {...register("backgroundObservation")}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end">
        <button
          type="button"
          className="px-4 py-2 rounded-lg"
          style={{
            backgroundColor: isNextButtonPressed ? '#7f1616' : (isNextButtonHovered ? '#a82a2a' : '#9b1c1c'), // Red for next button, explicit hex
            color: 'white',
            transition: 'background-color 0.2s ease, transform 0.1s ease',
            transform: isNextButtonPressed ? 'scale(0.98)' : 'scale(1)',
          }}
          onClick={async () => {
            const result = await trigger(["name", "gender", "dob", "dateOfTesting", "class", "informantSelect", "informantOther", "schoolSelect", "schoolOther"]);
            if (result) {
              setActiveTab("tab2");
            }
          }}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsNextButtonHovered(true)}
          onMouseLeave={() => setIsNextButtonHovered(false)}
          onMouseDown={() => setIsNextButtonPressed(true)}
          onMouseUp={() => setIsNextButtonPressed(false)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsTab;

