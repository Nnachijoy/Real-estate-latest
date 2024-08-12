import { Table, Row, Col } from 'react-bootstrap';
import Animation from '../Animation';

const inspectionData = [
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", purpose: "Buying", contact: "08133289824", status: "Sold", statusColor: "#00FF38" },
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", purpose: "Buying", contact: "08133289824", status: "Bought", statusColor: "#00FF38" },
  { date: "22/01", clientName: "Peter", property: "Blake resort", purpose: "Selling", contact: "08133289824", status: "Bought", statusColor: "#61FF00" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", purpose: "Buying", contact: "08133289824", status: "Rented out", statusColor: "#00B2FF" },
  { date: "31/01", clientName: "Mr Blake", property: "Living spring", purpose: "Renting", contact: "08133289824", status: "Rented out", statusColor: "#00B2FF" },
];

function RecentInspectionTable() {
  return (
    <Animation animationClass="animate__slideInRight" delay={200}>
      <Row>
        <Col xs="12" lg="12">
          <div className="m-3">
            <h3 className="mt-5">Recent Inspection</h3>
          </div>
          <div className="table-responsive rounded-4">
            <Table hover className="bg-white no-borders text-center custom-table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Client's Name</th>
                  <th scope="col">Property</th>
                  <th scope="col">Purpose</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {inspectionData.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.date}</th>
                    <td>{item.clientName}</td>
                    <td>{item.property}</td>
                    <td>{item.purpose}</td>
                    <td>{item.contact}</td>
                    <td style={{ color: item.statusColor }}>{item.status}</td>
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

export default RecentInspectionTable;
