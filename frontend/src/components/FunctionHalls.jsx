import React, { useState } from "react";
import "./FunctionHalls.css"; // Add styles for the function halls

const FunctionHalls = () => {
  const halls = [
    {
      id: 1,
      name: "Grand Palace Hall",
      location: "Hyderabad, TS",
      description: "A luxurious hall with a grand ambience, perfect for weddings and large events.",
      image: "function1.jpg",
      eventType: "Wedding",
      acType: "AC",
      price: 20000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 2,
      name: "Sunset Garden Hall",
      location: "Vijayawada, AP",
      description: "An outdoor garden hall with beautiful sunset views, ideal for outdoor gatherings.",
      image: "function2.jpg",
      eventType: "Outdoor Gathering",
      acType: "Non-AC",
      price: 15000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 3,
      name: "Crystal Conference Center",
      location: "Guntur, AP",
      description: "A modern venue for conferences and corporate events, offering state-of-the-art facilities.",
      image: "function3.jpeg",
      eventType: "Conference",
      acType: "AC",
      price: 30000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 4,
      name: "Royal Banquet Hall",
      location: "Hyderabad, TS",
      description: "An exquisite banquet hall suitable for grand weddings and receptions.",
      image: "function4.jpeg",
      eventType: "Wedding",
      acType: "AC",
      price: 25000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 5,
      name: "Garden View Hall",
      location: "Vijayawada, AP",
      description: "A scenic hall with garden views, perfect for outdoor events and parties.",
      image: "function5.jpg",
      eventType: "Outdoor Gathering",
      acType: "Non-AC",
      price: 18000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 6,
      name: "Corporate Meeting Hall",
      location: "Guntur, AP",
      description: "A professional setting for meetings and corporate events with modern amenities.",
      image: "function6.jpeg",
      eventType: "Conference",
      acType: "AC",
      price: 32000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 7,
      name: "Classic Celebration Hall",
      location: "Hyderabad, TS",
      description: "A traditional hall ideal for anniversaries, parties, and celebrations.",
      image: "function7.jpeg",
      eventType: "Anniversary",
      acType: "Non-AC",
      price: 22000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 8,
      name: "Sky Lounge Hall",
      location: "Vijayawada, AP",
      description: "An elegant hall located on the top floor, providing breathtaking views for any event.",
      image: "function8.jpg",
      eventType: "Outdoor Gathering",
      acType: "AC",
      price: 35000, // Added price
      qrCode: "qr.jpg", // QR code image
    },
    {
      id: 9,
      name: "Majestic Event Hall",
      location: "Hyderabad, TS",
      description: "A majestic hall for grand celebrations and unforgettable events.",
      image: "function9.jpeg",
      eventType: "Wedding",
      acType: "AC",
      price: 30000,
      qrCode: "qr.jpg",
    },
    {
      id: 10,
      name: "Lotus Blossom Hall",
      location: "Vijayawada, AP",
      description: "A serene venue surrounded by nature, perfect for peaceful gatherings.",
      image: "function10.jpeg",
      eventType: "Outdoor Gathering",
      acType: "Non-AC",
      price: 20000,
      qrCode: "qr.jpg",
    },
    {
      id: 11,
      name: "Innovation Center",
      location: "Guntur, AP",
      description: "A hub for creative events and technology conferences.",
      image: "function11.jpeg",
      eventType: "Conference",
      acType: "AC",
      price: 40000,
      qrCode: "qr.jpg",
    },
    {
      id: 12,
      name: "Elegance Banquet Hall",
      location: "Hyderabad, TS",
      description: "A chic banquet hall for stylish weddings and elegant events.",
      image: "function12.jpeg",
      eventType: "Wedding",
      acType: "AC",
      price: 35000,
      qrCode: "qr.jpg",
    },
    {
      id: 13,
      name: "Sunrise Terrace Hall",
      location: "Vijayawada, AP",
      description: "An outdoor terrace hall with stunning sunrise views.",
      image: "function13.jpeg",
      eventType: "Outdoor Gathering",
      acType: "Non-AC",
      price: 25000,
      qrCode: "qr.jpg",
    },
    {
      id: 14,
      name: "Executive Suite",
      location: "Guntur, AP",
      description: "A high-end meeting hall equipped with the latest technology.",
      image: "function14.jpeg",
      eventType: "Conference",
      acType: "AC",
      price: 45000,
      qrCode: "qr.jpg",
    },
    {
      id: 15,
      name: "Celebration Pavilion",
      location: "Hyderabad, TS",
      description: "A vibrant pavilion for joyous celebrations and events.",
      image: "function15.jpeg",
      eventType: "Anniversary",
      acType: "Non-AC",
      price: 23000,
      qrCode: "qr.jpg",
    },
    {
      id: 16,
      name: "The Atrium",
      location: "Vijayawada, AP",
      description: "A stunning atrium hall perfect for large gatherings and exhibitions.",
      image: "function16.jpeg",
      eventType: "Outdoor Gathering",
      acType: "AC",
      price: 38000,
      qrCode: "qr.jpg",
    },
    {
      id: 17,
      name: "Regal Conference Hall",
      location: "Guntur, AP",
      description: "A grand hall for conferences and large meetings.",
      image: "function17.jpeg",
      eventType: "Conference",
      acType: "AC",
      price: 50000,
      qrCode: "qr.jpg",
    },
    {
      id: 18,
      name: "Golden Leaf Hall",
      location: "Hyderabad, TS",
      description: "A luxurious hall with golden accents, perfect for lavish events.",
      image: "function18.jpeg",
      eventType: "Wedding",
      acType: "AC",
      price: 40000,
      qrCode: "qr.jpg",
    },
    {
      id: 19,
      name: "Nature's Retreat Hall",
      location: "Vijayawada, AP",
      description: "A peaceful hall surrounded by nature, ideal for retreats and gatherings.",
      image: "function19.jpeg",
      eventType: "Outdoor Gathering",
      acType: "Non-AC",
      price: 27000,
      qrCode: "qr.jpg",
    },
    {
      id: 20,
      name: "Crown Jewel Conference Center",
      location: "Guntur, AP",
      description: "The ultimate venue for high-profile conferences and meetings.",
      image: "function20.jpeg",
      eventType: "Conference",
      acType: "AC",
      price: 55000,
      qrCode: "qr.jpg",
    },
  ];

  const locations = {
    Wedding: ["Hyderabad, TS", "Vijayawada, AP", "Guntur, AP"],
    "Outdoor Gathering": ["Vijayawada, AP", "Guntur, AP"],
    Conference: ["Guntur, AP", "Hyderabad, TS"],
    Anniversary: ["Hyderabad, TS", "Vijayawada, AP"],
  };

  const [locationOptions, setLocationOptions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const [acType, setAcType] = useState(""); // State for AC type
  const [filteredHalls, setFilteredHalls] = useState(halls);
  const [selectedHall, setSelectedHall] = useState(null); // State for selected hall
  const [showPaymentDetails, setShowPaymentDetails] = useState(false); // State for showing payment details
  const [isBooked, setIsBooked] = useState(false); // State to track booking status

  const handleEventChange = (e) => {
    const eventType = e.target.value;
    setEventName(eventType);
    setLocationOptions(locations[eventType] || []);
    setSelectedLocation("");
  };

  const handleSearch = () => {
    if (!selectedLocation || !eventName) {
      alert("Please select both an event and a location.");
      return;
    }

    const filtered = halls.filter(
      (hall) =>
        hall.location.includes(selectedLocation) &&
        hall.eventType === eventName &&
        (acType ? hall.acType === acType : true)
    );
    setFilteredHalls(filtered);
  };

  const handleHallClick = (hall) => {
    setSelectedHall(hall);
    setShowPaymentDetails(false);
    setIsBooked(false); // Reset booking status when selecting a new hall
  };

  const handleBack = () => {
    setSelectedHall(null);
  };

  const handleBookNow = () => {
    setIsBooked(true); // Mark the hall as booked
  };

  const handlePayment = () => {
    setShowPaymentDetails(true);
  };

  return (
    <section id="function-halls" className="function-halls container">
      <h2>Search Function Halls</h2>

      {selectedHall ? (
        <div className="hall-details">
          <button onClick={handleBack} className="back-button">Back to Search</button>
          <img src={selectedHall.image} alt={selectedHall.name} className="hall-image" />
          <div>
            <h3>{selectedHall.name}</h3>
            <p>Location: {selectedHall.location}</p>
            <p>{selectedHall.description}</p>
            <p>Type: {selectedHall.acType}</p>
            <p>Price: ₹{selectedHall.price}</p>

            {/* Conditional Button Logic */}
            {!isBooked ? (
              <button onClick={handleBookNow} className="book-button">Book Now</button>
            ) : (
              <button onClick={handlePayment} className="payment-button">Proceed to Payment</button>
            )}

            {showPaymentDetails && (
              <div className="payment-details">
                <h4>QR Code for Booking:</h4>
                <img src={selectedHall.qrCode} alt={`QR Code for ${selectedHall.name}`} className="qr-code" />
                <p>Payment Amount: ₹{selectedHall.price}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="search-bar">
            <select value={eventName} onChange={handleEventChange}>
              <option value="">Select Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Outdoor Gathering">Outdoor Gathering</option>
              <option value="Conference">Conference</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              disabled={!locationOptions.length}
            >
              <option value="">Select Location</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <select value={acType} onChange={(e) => setAcType(e.target.value)}>
              <option value="">Select AC Type</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>

            <button onClick={handleSearch} className="search-button">Search</button>
          </div>

          <div className="halls-list">
            {filteredHalls.map((hall) => (
              <div
                key={hall.id}
                className="hall-item"
                onClick={() => handleHallClick(hall)}
              >
                <img src={hall.image} alt={hall.name} className="hall-image-small" />
                <h4>{hall.name}</h4>
                <p>Location: {hall.location}</p>
                <p>Event Type: {hall.eventType}</p>
                <p>Price: ₹{hall.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FunctionHalls;
