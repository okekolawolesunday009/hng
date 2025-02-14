import React, { useState, useEffect } from "react";

const Profile = ({ selectedTicket,setSelectedPage, ticketCount, handleSubmit }) => {
  // Retrieve user details from localStorage
  const [fullName, setFullName] = useState(localStorage.getItem("fullName") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || "");
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Save user details to localStorage
  useEffect(() => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("avatar", avatar);
  }, [fullName, email, avatar]);

  // Handle file upload for avatar
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Store Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid Email is required";
    if (!selectedTicket) newErrors.ticket = "Please select a ticket type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = {
      fullName,
      email,
      avatar,
      selectedTicket,
      ticketCount,
    };

    handleSubmit(formData);
    console.log("Form Data Submitted:", formData);
    setShowSuccess(true);
    setSelectedPage("tickets")
  };

  return (
    <div className="mx-auto w-[20rem] text-tetiaryColor border-2 border-primaryColor2 mt-4  p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">🎟 Your Profile</h1>
      
      <form onSubmit={submit} className="space-y-4">

      <div className="flex justify-center flex-col items-center">
      {avatar && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Preview:</p>
              <img src={avatar} alt="Avatar Preview" className="w-24 h-24 rounded-full mt-2" />
            </div>
          )}
          <label className="block font-medium">Upload Avatar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="w-full p-2 border-2 border-primaryColor2 bg-transparent rounded-lg"
          />
         
        </div>

        {/* Full Name */}
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border-2 border-primaryColor2 bg-transparent rounded-lg"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent p-2 border-2 border-primaryColor2 rounded-lg"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Avatar Upload */}
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full  text-white bg-primaryColor2 py-2 rounded-lg hover::bg-green-600"
        >
          Submit
        </button>
      </form>

      {showSuccess && <p className="text-green-500 mt-4">Profile saved successfully!</p>}
    </div>
  );
};

export default Profile;
