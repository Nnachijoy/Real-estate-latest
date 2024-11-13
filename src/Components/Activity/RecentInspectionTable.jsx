import { Table, Row, Col } from 'react-bootstrap'; // Importing Table, Row, and Col components from react-bootstrap for layout and table rendering
import Animation from '../Animation'; // Importing custom Animation component to apply animations

// Sample data for recent inspection details including property status and status color
const inspectionData = [
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", purpose: "Buying", contact: "08133289824", status: "Sold", statusColor: "#00FF38" },
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", purpose: "Buying", contact: "08133289824", status: "Bought", statusColor: "#00FF38" },
  { date: "22/01", clientName: "Peter", property: "Blke resort", purpose: "Selling", contact: "08133289824", status: "Bought", statusColor: "#61FF00" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", purpose: "Buying", contact: "08133289824", status: "Rented out", statusColor: "#00B2FF" },
  { date: "31/01", clientName: "Mr Blake", property: "Living spring", purpose: "Renting", contact: "08133289824", status: "Rented out", statusColor: "#00B2FF" },
];

function RecentInspectionTable() {
  return (
    <Animation animationClass="animate__slideInRight" delay={200}> {/* Wrapping the table inside Animation component to apply slide-in effect */}
      <Row> {/* Row to structure the layout */}
        <Col xs="12" lg="12"> {/* Column that spans full width on all screen sizes */}
          <div className="m-3"> {/* Margin for spacing */}
            <h3 className="mt-5">Recent Inspection</h3> {/* Heading for the table section */}
          </div>
          <div className="table-responsive rounded-4"> {/* Div to make the table responsive */}
            <Table hover className="bg-white no-borders text-center custom-table"> {/* Table component with hover effect and custom styling */}
              <thead>
                <tr>
                  {/* Table headers defining each column */}
                  <th scope="col">Date</th>
                  <th scope="col">Client's Name</th>
                  <th scope="col">Property</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Mapping through inspectionData to create table rows dynamically */}
                {inspectionData.map((item, index) => (
                  <tr key={index}> {/* Row for each inspection item */}
                    <th scope="row">{item.date}</th> {/* Date column */}
                    <td>{item.clientName}</td> {/* Client's Name column */}
                    <td>{item.property}</td> {/* Property column */}
                    <td>{item.purpose}</td> {/* Purpose column */}
                    <td>{item.contact}</td> {/* Contact column */}
                    <td style={{ color: item.statusColor }}>{item.status}</td> {/* Status column with dynamic color based on status */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Animation>
  );
}

export default RecentInspectionTable; // Export the RecentInspectionTable component for use elsewhere in the app
