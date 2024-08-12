import { Table } from 'react-bootstrap';

const inspectionData = [
  { date: "01/01", clientName: "Mr Paul", property: "The panoramo", purpose: "Buying", contact: "08133289824" },
  { date: "22/01", clientName: "Peter", property: "Blake resort", purpose: "Selling", contact: "08133289824" },
  { date: "24/01", clientName: "Miss Abigail", property: "Lekki duplex", purpose: "Buying", contact: "08133289824" },
  { date: "31/01", clientName: "Mr Blake", property: "Living spring", purpose: "Renting", contact: "08133289824" },
];

function InspectionTable() {
  return (
    <>
      <h3 className="mt-5">Next Inspection</h3>
      <div className="table-responsive rounded-4">
        <Table hover className="bg-white no-borders text-center custom-table">
          <thead>
            <tr>
              <th scope="col">Dates</th>
              <th scope="col">Clients Name</th>
              <th scope="col">Property</th>
              <th scope="col">Purpose</th>
              <th scope="col">Contact</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default InspectionTable;
