import React from 'react';
import { useState } from 'react';
import { Alert, Button } from "react-bootstrap";
const Contact = () => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        name: "",
        phone: "",
        persons: "1 Person",
      });
    
      const [showAlert, setShowAlert] = useState(false); // State to show/hide alert
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true); // Show alert when form is submitted
      };
    
      return (
        <div className="mt-5">
          <div className="text-center">
            <h1>Book a Table</h1>
            <p>
              We consider all drivers of change and give you the components you need
              to create a truly memorable experience.
            </p>
          </div>
    
          {/* Alert Message */}
          {showAlert && (
            <Alert
              variant="success"
              className="container text-center"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>🎉 Table Booked Successfully!</Alert.Heading>
              <p>We have received your reservation. See you soon! 🍽️</p>
            </Alert>
          )}
    
          <div className="card p-4 shadow-lg container">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
    
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="x-xxx-xxx-xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
    
              <div className="mb-3">
                <label className="form-label">Total Person</label>
                <select
                  className="form-select"
                  name="persons"
                  value={formData.persons}
                  onChange={handleChange}
                >
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                  <option>5+ Persons</option>
                </select>
              </div>
    
              <Button type="submit" variant="danger" className="w-100">
                Book A Table
              </Button>
            </form>
          </div>
    
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509456!2d144.96305761531643!3d-37.816279742021885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633527346283!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg w-100 mt-4"
          ></iframe>
        </div>
      )
};

export default Contact;