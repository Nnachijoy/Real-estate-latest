import { Table, Button } from 'react-bootstrap';
import Animation from '../Animation';

const inspectionData = [
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", status: "Sold", color: "#FCB859" },
  { date: "22/01", clientName: "Peter", property: "Blake resort", status: "Approved", color: "#A9DFD8" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", status: "Bought", color: "#0075FF" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", status: "Approved", color: "#A9DFD8" },
];

function InspectionTable() {
  return (
    <Animation animationClass="animate__slideInRight" delay={200}>
      <h3 className="mt-5">Next Inspection</h3>
      <div className="table-responsive rounded-4">
        <Table hover className="bg-white no-borders text-center custom-table">
          <thead>
            <tr>
              <th scope="col">Dates</th>
              <th scope="col">Clients Name</th>
              <th scope="col">Property</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {inspectionData.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.date}</th>
                <td>{item.clientName}</td>
                <td>{item.property}</td>
                <td>
                  <Button style={{ color: item.color, border: `${item.color} solid 2px`, background: `${item.color}1F` }}>
                    {item.status}
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

export default InspectionTable;
