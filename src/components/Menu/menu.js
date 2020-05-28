import React, {Fragment} from 'react'
// import {Table} from 'react-bootstrap'
import  './menu.css'
import DishCard from "../Card/card";

function Menu() {
    return (
      <Fragment>
        <div className="menu-block">
          {/* <Table responsive="md">
            <thead>
              <tr>
                <th>Menu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <DishCard />
                </td>
              </tr>
              <tr>
                <td>
                  <DishCard />
                </td>
              </tr>
              <tr>
                <td>
                  <DishCard />
                </td>
              </tr>
              <tr>
                <td>
                  <DishCard />
                </td>
              </tr>
              <tr>
                <td>Caldos</td>
              </tr>
              <tr>
                <td>Caldos</td>
              </tr>
              <tr>
                <td>Caldos</td>
              </tr>
            </tbody>
          </Table> */}
         <DishCard />
         </div>
      </Fragment>
    );
}

export default Menu;
