// Importing required components from react-bootstrap and a custom Animation component
import { Table, Button } from 'react-bootstrap';
import Animation from '../Animation';

// Defining an array of inspection data to be displayed in the table
const inspectionData = [
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", status: "Sold", color: "#FCB859" },
  { date: "22/01", clientName: "Peter", property: "Blake resort", status: "Approved", color: "#A9DFD8" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", status: "Bought", color: "#0075FF" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", status: "Approved", color: "#A9DFD8" },
];

// Function component to render the inspection data in a table format
function InspectionTable() {
  return (
    // Wrapping the table in the Animation component for a slide-in effect
    <Animation animationClass="animate__slideInRight" delay={200}>
      {/* Title for the inspection section */}
      <h3 className="mt-5">Next Inspection</h3>
      
      {/* Making the table responsive and adding custom styling */}
      <div className="table-responsive rounded-4">
        <Table hover className="bg-white no-borders text-center custom-table">
          <thead>
            <tr>
              <th scope="col">Dates</th> {/* Column header for inspection date */}
              <th scope="col">Clients Name</th> {/* Column header for client name */}
              <th scope="col">Property</th> {/* Column header for property name */}
              <th scope="col">Purpose</th> {/* Column header for inspection purpose */}
            </tr>
          </thead>
          <tbody>
            {/* Mapping through the inspection data array to generate table rows */}
            {inspectionData.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.date}</th> {/* Displaying the inspection date */}
                <td>{item.clientName}</td> {/* Displaying the client's name */}
                <td>{item.property}</td> {/* Displaying the property name */}
                <td>
                  {/* Status button styled dynamically based on inspection status color */}
                  <Button 
                    style={{ 
                      color: item.color, // Text color based on status color
                      border: `${item.color} solid 2px`, // Border color
                      background: `${item.color}1F` // Background color with transparency
                    }}
                  >
                    {item.status} {/* Status text */}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Animation>
  );
}

// Exporting the InspectionTable component to be used in other parts of the application
export default InspectionTable;
