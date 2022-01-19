import React, {useState} from 'react';
import './OrderBook.css';
const OrderBook = () => {
  const [change, setChange] = useState(true);
  return (
    <div class="bgColor">
      <div class="container pt-4">
        {/* <button onClick={() => setChange(!change)}>Click Here!</button> */}
        <div className="navBg justify-content-between d-flex p-3 p">
          <div>Order Book</div>
          <div className="arrowBg">
            Group 0.50 <i class="fas fa-angle-down "></i>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 paddingRight">
            <table class="table tableBg">
              <thead>
                <tr>
                  <th scope="col">Total</th>
                  <th scope="col">Size</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2,300</td>
                  <td>2,300</td>
                  <td className="greenNumbers">43,341.21</td>
                </tr>
                <tr>
                  <td>2,800</td>
                  <td>500</td>
                  <td className="greenNumbers">43,777.00</td>
                </tr>
                <tr>
                  <td>3,300</td>
                  <td>500</td>
                  <td className="greenNumbers">43,322</td>
                </tr>
                <tr className="trbg">
                  <td>108,566</td>
                  <td>105,566</td>
                  <td className="greenNumbers">47,340.30</td>
                </tr>
                <tr className="trbg1">
                  <td>121,390</td>
                  <td>12,824</td>
                  <td className="greenNumbers">43,399.00</td>
                </tr>
                <tr className="trbg2">
                  <td>139,390</td>
                  <td>15,000</td>
                  <td className="greenNumbers">43,366.00</td>
                </tr>
                <tr className="trbg3">
                  <td>233,300</td>
                  <td>43,132</td>
                  <td className="greenNumbers">43,388.50</td>
                </tr>
                <tr className="trbg4">
                  <td>287,300</td>
                  <td>51,354</td>
                  <td className="greenNumbers">43,321.53</td>
                </tr>
                <tr className="trbg5">
                  <td>305,300</td>
                  <td>3,655</td>
                  <td className="greenNumbers">43,328.00</td>
                </tr>
                <tr className="trbg6">
                  <td>381,300</td>
                  <td>50,654</td>
                  <td className="greenNumbers">43,322.50</td>
                </tr>
                <tr className="trbg7">
                  <td>385,300</td>
                  <td>4,000</td>
                  <td className="greenNumbers">43,329.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 col-12 paddingLeft">
            <table class="table tableBg">
              <thead>
                <tr className="trbg8">
                  <th scope="col">Price</th>
                  <th scope="col">Size</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="trbg9">
                  <td className="redNumbers">43,721.00</td>
                  <td>2,300</td>
                  <td>2,300</td>
                </tr>
                <tr className="trbg10">
                  <td className="redNumbers">43,722.00</td>
                  <td>7,306</td>
                  <td>4,375</td>
                </tr>
                <tr className="trbg11">
                  <td className="redNumbers">43,723.00</td>
                  <td>13,436</td>
                  <td>4,000</td>
                </tr>
                <tr className="trbg19">
                  <td className="redNumbers">43,729.00</td>
                  <td>21,741</td>
                  <td>5,000</td>
                </tr>
                <tr className="trbg12">
                  <td className="redNumbers">43,723.002</td>
                  <td>25,741</td>
                  <td>50,882</td>
                </tr>
                <tr className="trbg13">
                  <td className="redNumbers">43,726.00</td>
                  <td>30,741</td>
                  <td>2,990</td>
                </tr>
                <tr className="trbg14">
                  <td className="redNumbers">43,721.00</td>
                  <td>81,543</td>
                  <td>18,129</td>
                </tr>
                <tr className="trbg15">
                  <td className="redNumbers">43,727.00</td>
                  <td>84,533</td>
                  <td>32,033</td>
                </tr>
                <tr className="trbg16">
                  <td className="redNumbers">43,728.00</td>
                  <td>102,677</td>
                  <td>37,140</td>
                </tr>
                <tr className="trbg17">
                  <td className="redNumbers">43,730.00</td>
                  <td>134,245</td>
                  <td>61,090</td>
                </tr>
                <tr className="trbg18">
                  <td className="redNumbers">43,733.00</td>
                  <td>245,677</td>
                  <td>13,056</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-6 col-6 text-end ">
            <button className="feedBtn bg">
              {' '}
              <i class="fas fa-exchange-alt "></i> Toggle Feed
            </button>
          </div>
          <div className="col-md-6 col-6 text-start ">
            <button className="feedBtn ">
              <i class="fas fa-info-circle mleft"></i>Kill Feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
