import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function RegistrationForm() {
  //State define 
  const [organizationName, setOrganizationName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [division,setDivision] = useState('');
  const [divisionArray, setDivisionArray] = useState([]);
  const [district, setDistrict] = useState('');
  const [districtArray, setDistrictArray] = useState([]);
  const [thana, setThana] = useState('');
  const [address, setAddress] = useState('');
  const [pack,setPackage] = useState('');
  const [customer,setCustomer] = useState('');
  const [refeName,setRefeName] = useState('');
  const [refeMobile,setRefeMobile] = useState('');
  
  const handleSubmit = async (e) => {
       e.preventDefault();

       if (division) {
        
        const newDivisionObject = { division: division };
        setDivisionArray([...divisionArray, newDivisionObject]);
        
        
        setDivision('');
      }
      if (district) {
        
        const newDistrictObject = { district: district };
        setDistrictArray([...districtArray, newDistrictObject]);
        setDistrict('');
      }
       const data = {
        organizationName,
        adminName,
        mobileNumber,
        email,
        divisionArray,
        districtArray,
        thana,
        address,
        pack,
        customer,
        refeName,
        refeMobile
       }
       
       console.log(data);
  }

  return (
    <div className=" container bg-white">
      <div className="w-50 mx-auto">
        <h3 className="text-muted text-md pt-5">Registration</h3>
        <form  onSubmit={handleSubmit}>
          <label htmlFor="name">
            Organization Name <span className="text-warning ">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="form-control mb-2"
            // placeholder="Enter your name"
            name="name"
            onChange={(e) => setOrganizationName(e.target.value)}
            value={organizationName}
            required
          />
          <label htmlFor="admin">
            Admin Name <span className="text-warning">*</span>
          </label>

          <input
            id="admin"
            type="text"
            className="form-control mb-2"
            // placeholder="Enter your name"
            name="admin"
            onChange={(e) => setAdminName(e.target.value)}
            required
          />
          <label htmlFor="mobile">
            Mobile Number <span className="text-warning">*</span>
          </label>
          <input
            id="mobile"
            type="number"
            className="form-control mb-2"
            // placeholder="Enter your name"
            name="admin"
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <label htmlFor="email">
            Email <span className="text-warning">*</span>
          </label>
          <input
            type="email"
            className="form-control mb-2"
            // placeholder="Enter your email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="divison">
            Selcet Division <span className="text-warning">*</span>
          </label>
          <select
            className="form-select form-control mb-2"
            aria-label="Default select example"
            required
            onChange={(e) => setDivision(e.target.value)}
            name="divison"
            id="divison">
            <option selected disabled>
              ...
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Barisal">Barisal</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
          </select>
          <label htmlFor="district">
            Selcet District <span className="text-warning">*</span>
          </label>
          <select
            className="form-select form-control mb-2"
            aria-label="Default select example"
            required
            onChange={(e) => setDistrict(e.target.value)}
            name="district"
            id="district">
            <option selected disabled>
              ...
            </option>
            <option value="Tangail">Tangail</option>
            <option value="Bugura">Bugura</option>
            <option value="Nachole">Nachole</option>
            <option value="Bholohat">Bholohat</option>
          </select>
          <label htmlFor="thana">
            Selcet Thana <span className="text-warning">*</span>
          </label>
          <select
            className="form-select form-control mb-2"
            aria-label="Default select example"
            required
            onChange={(e) => setThana(e.target.value)}
            name="thana"
            id="thana">
            <option selected disabled>
              ...
            </option>
            <option value="Gomastapur">Gomastapur</option>
            <option value="Khesapur">Khesapur</option>
            <option value="Mirarpur">Mirarpur</option>
            <option value="Bholohat">Bholohat</option>
          </select>
          <label htmlFor="address">
            Address <span className="text-warning ">*</span>
          </label>
          <input
            id="address"
            type="text"
            className="form-control mb-2"
            // placeholder="Enter your name"
            name="address"
           
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-danger fw-bold mb-3 w-100 d-flex justify-content-center align-items-center">
            <span className="fs-2 pe-3">50%</span>
            <span className="fs-5 pl-3">Discount With Sign Up Fee</span>
          </button>

          <label htmlFor="package">
            Selcet Your Preferable Package{" "}
            <span className="text-warning pb-1">*</span>
          </label>
          <select
            className="form-select form-control mb-2"
            aria-label="Default select example"
            required
            onChange={(e) => setPackage(e.target.value)}
            name="package"
            id="package">
            <option selected disabled>
              Selcet Package
            </option>
            <option value="100">p1-100</option>
            <option value="200">p2-200</option>
            <option value="300">p3-300</option>
            <option value="400">p4-400</option>
            <option value="500">p5-500</option>
          </select>
          <button type="button" className="btn btn-primary w-100 mb-3 fw-bold">
            Customers : 750 Sign Up Fee : 6,000 3,000 Month Fee : 1,800
          </button>

          <label htmlFor="package">Customer Type</label>

          <div className="d-flex justify-content-between ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
               onChange={(e) => setCustomer(e.target.value)}
                id="PPPLE"
              />
              <label className="form-check-label" for="PPPLE">
                PPPLE
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => setCustomer(e.target.value)}
                id="Static"
              />
              <label className="form-check-label" for="Static">
                Static
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(e) => setCustomer(e.target.value)}
                id="Hotspot"
              />
              <label className="form-check-label" for="Hotspot">
                Hotspot
              </label>
            </div>
          </div>

          <div className="my-3 border p-3">
            <label htmlFor="refername">
              Referance Name 
            </label>
            <input
              id="refername"
              type="text"
              className="form-control mb-2"
              // placeholder="Enter your name"
              name="refername"
             onChange={(e) => setRefeName(e.target.value)}
            />

            <label htmlFor="refermobile">
               Referance Mobile 
            </label>
            <input
              id="refermobile"
              type="number
              "
              className="form-control mb-2"
              // placeholder="Enter your name"
              name="refermobile"
              onChange={(e) => setRefeMobile(e.target.value)}
            />
          
          </div>

          <input
            type="submit"
            className="btn btn-primary my-3 "
            value="Register"></input>
          <input
            type="reset"
            className="btn btn-secondary ms-2 my-3"
            value="Reset"></input>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
