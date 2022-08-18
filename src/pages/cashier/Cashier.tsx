import React from "react";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Table from "../../components/table/Table";
import tomates from "../../assets/imgs/tomates.png";
import bananas from "../../assets/imgs/bananas.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiFileList2Line } from "react-icons/ri";
import Paginator from "../../components/paginator/Paginator";
import styles from "./cashier.module.scss";

const { container } = styles;

const Cashier = () => {
  return (
    <div className={container}>
      <Table>
        <thead>
          <th></th>
          <th>Image</th>
          <th>Référence Produit</th>
          <th>Prix unit.</th>
          <th>Quantité</th>
          <th>Prix à payer</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
          <tr>
            <td>1</td>
            <td>
              <img src={tomates} alt="Tomates" height={34} />
            </td>
            <td>Tomates</td>
            <td>70.00 DZD</td>
            <td>2.5 Kg</td>
            <td>140.00 DZD</td>
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
          <tr>
            <td>2</td>
            <td>
              <img src={bananas} alt="Bananes" height={34} />
            </td>
            <td>Bananes</td>
            <td>300.00 DZD</td>
            <td>2 Kg</td>
            <td>600.00 DZD</td>
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
        </tbody>
      </Table>
      <Paginator pagesNumber={11} selectedPage={undefined} />
    </div>
  );
};

export default MainLayout(Cashier);
