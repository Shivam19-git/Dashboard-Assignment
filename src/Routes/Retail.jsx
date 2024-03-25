import React from 'react';


const Retail = () => {
 
  const carRetailer = {
    name: "AutoWorld",
    location: "123 Main Street, Cityville",
    phone: "(123) 456-7890",
    website: "www.autoworld.com",
    services: ["Sales", "Service", "Parts"],
    hours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed"
    }
  };

  return (
    <div className="retail-container">
      <h1 className="heading">Car Retailer Information</h1>
      <div className="retail-details">
        <div className="retail-section">
          <h2>Retailer Details</h2>
          <div className="retail-topic">
            <p>Name: {carRetailer.name}</p>
            <p>Location: {carRetailer.location}</p>
            <p>Phone: {carRetailer.phone}</p>
            <p>Website: <a href={`http://${carRetailer.website}`} target="_blank" rel="noopener noreferrer">{carRetailer.website}</a></p>
          </div>
        </div>
        <div className="retail-section">
          <h2>Services Offered</h2>
          <div className="retail-topic">
            <ul>
              {carRetailer.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="retail-section">
          <h2>Business Hours</h2>
          <div className="retail-topic">
            <table>
              <tbody>
                {Object.entries(carRetailer.hours).map(([day, hours]) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retail;
