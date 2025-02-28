import { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
const validateForm = () => {}
const handleSubmit = (e) => {
  e.preventDefault();

  const success = validateForm();

  if (success === true) signup(formData);
};



  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      
    </div>
  )
}

export default SignUpPage