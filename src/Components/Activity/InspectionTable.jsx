import { Table } from 'react-bootstrap'; // Importing Table component from react-bootstrap for creating the table

// Sample data for inspection details
const inspectionData = [
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", purpose: "Buying", contact: "08133289824" },
  { date: "22/01", clientName: "Peter", property: "Blake resort", purpose: "Selling", contact: "08133289824" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", purpose: "Buying", contact: "08133289824" },
  { date: "31/01", clientName: "Mr Blake", property: "Living spring", purpose: "Renting", contact: "08133289824" },
];

function InspectionTable() {
  return (
    <>
      <h3 className="mt-5">Next Inspection</h3> {/* Title for the section */}
      <div className="table-responsive rounded-4"> {/* Wrapping div to make the table responsive */}
        {/* Table component for displaying inspection data */}
        <Table hover className="bg-white no-borders text-center custom-table">
          <thead>
            <tr>
              {/* Table headers */}
              <th scope="col">Dates</th>
              <th scope="col">Clients Name</th>
              <th scope="col">Property</th>
              <th scope="col">Purpose</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through the inspectionData array to create rows dynamically */}
            {inspectionData.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.date}</th> {/* Date column */}
                <td>{item.clientName}</td> {/* Client's Name column */}
                <td>{item.property}</td> {/* Property column */}
                <td>{item.purpose}</td> {/* Purpose column */}
                <td>{item.contact}</td> {/* Contact column */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default InspectionTable; // Export the InspectionTable component for use in other parts of the app
