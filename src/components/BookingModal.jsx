import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked"); // debug

    try {
      const res = await fetch("http://localhost:5000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      onClose(); // modal close after submit
    } catch (err) {
      console.error("Booking error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <form action="https://api.w3forms.com/submit" method="POST" className="bg-white p-4">
          <input type="hidden" name="access_key" value="b1a5b512-3ff1-4fd8-8cd5-dec37191e67f" />

          <input type="text" name="name" placeholder="Name" required className="w-full mb-2 p-2 border" />
          <input type="date" name="date" required className="w-full mb-2 p-2 border" />
          <input type="time" name="time" required className="w-full mb-2 p-2 border" />
          <input type="number" name="guests" placeholder="Guests" required className="w-full mb-2 p-2 border" />

          <button type="submit" className="bg-yellow-400 px-4 p-2 w-full">
            Reserve
          </button>
          <button type="close" className="bg-white border-2 px-4 p-2 w-full">
            Close
          </button>
        </form>
    </div>
  );
}