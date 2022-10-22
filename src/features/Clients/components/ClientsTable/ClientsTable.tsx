import Table from '@components/table/Table';
import manPic from '@features/Clients/assets/img/man-pic.png';
import joeyPic from '@features/Clients/assets/img/joey.jpg'
import monicaPic from '@features/Clients/assets/img/monica.jpg';
import phoebePic from '@features/Clients/assets/img/Phoebe.png';
import rachelPic from '@features/Clients/assets/img/rachel.jpg';
import { RiDeleteBin5Line, RiFileList2Line } from 'react-icons/ri';
import style from './clients-table.module.scss';

const {userPic, body, latePayment, noLatePayment} = style;

const fakeData = [{
  id: 1,
  img: manPic,
  firstName: 'Mathew',
  lastName: 'Perry',
  lateFromPayment: 23000,
  totalUnpained: 54000
}, {
  id: 2,
  img: joeyPic,
  firstName: 'Joseph',
  lastName: 'Francis',
  lateFromPayment: 83000,
  totalUnpained: 194000
}, {
  id: 3,
  img: monicaPic,
  firstName: 'Courtney',
  lastName: 'Cox',
  lateFromPayment: 0,
  totalUnpained: 0
}, {
  id: 4,
  img: phoebePic,
  firstName: 'Lisa',
  lastName: 'Kudrow',
  lateFromPayment: 999999,
  totalUnpained: 999999
}, {
  id: 5,
  img: rachelPic,
  firstName: 'Jennifer',
  lastName: 'Aniston',
  lateFromPayment: 43000,
  totalUnpained: 60000
}]

const ClientsTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Photo</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>En retard de paiement</th>
          <th>Total à payer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className={body}>
        {fakeData.map((client, index) => (
          <tr key={client.id}>
            <td>{index + 1}</td>
            <td><img src={client.img} alt="Tomates" height={34} className={userPic}/></td>
            <td>{client.lastName}</td>
            <td>{client.firstName}</td>
            <td className={client.lateFromPayment ? latePayment : noLatePayment}>{client.lateFromPayment} DZD</td>
            <td>{client.totalUnpained} DZD</td>
            <td>
              <RiFileList2Line
                  color="#DC6F40"
                  size={20}
                  style={{ marginInlineEnd: 10, cursor: "pointer" }}
              />
              <RiDeleteBin5Line
                  color="#FF4337"
                  size={20}
                  style={{ cursor: "pointer" }}
              />
              </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ClientsTable