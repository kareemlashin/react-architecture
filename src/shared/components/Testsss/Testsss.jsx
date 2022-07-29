import React, { PureComponent } from "react";
import { decodeToken, isExpired } from "react-jwt";
import "./index.scss";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import i18n from "../../../i18n";
import { withTranslation } from "react-i18next";
import Multiselect from "multiselect-react-dropdown";
import LinksRoute from "../LinksRoute/LinksRoute";


class Testsss extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      myDecodedToken: null,
      isMyTokenExpired: null,
      selectedValue:[],
      options: [
        { name: "Option 5", id: 5 },
        { name: "Option 4", id: 4 },
        { name: "Option 1", id: 1 },
        { name: "Option 2", id: 2 },
        { name: "Option 3", id: 3 },
      ],
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    };
  }
  onSelect = (selectedList, selectedItem) => {
    console.log(selectedItem, selectedList);
    this.state.selectedValue=selectedList;
  };

  onRemove = (selectedList, removedItem) => {
    console.log(removedItem, selectedList);
    this.state.selectedValue=selectedList;
  };
  componentWillMount = () => {
    this.state.myDecodedToken = decodeToken(this.state.token);
    this.state.isMyTokenExpired = isExpired(this.state.token);
    console.log(this.state.myDecodedToken);
    console.log(this.state.isMyTokenExpired);
  };

  componentDidMount = () => {};

  componentWillReceiveProps = (nextProps) => {};

  componentWillUpdate = (nextProps, nextState) => {};

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};
  validationSchema = () => {
    return Yup.object().shape({
      fullname: Yup.string().required("Fullname is required"),
      username: Yup.string()
        .required("Username is required")
        .min(6, "Username must be at least 6 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(40, "Password must not exceed 40 characters"),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
      acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    });
  };
   
  changeLn = (lang) => {
    i18n.changeLanguage(lang);
  };
  handleSubmit=(initialValues)=>{
    console.log(initialValues);
    console.log(this.state.selectedValue)
  }
  render() {
    const initialValues = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      users:[]
    }; 
    return (
      <div className="TestsssWrapper">
        <div>
          Test content
          <div>
            <LinksRoute />
          </div>
          <div>
            <div>
              <button
                onClick={() => {
                  this.changeLn("en");
                }}
              >
                en
              </button>

              <button
                onClick={() => {
                  this.changeLn("ar");
                }}
              >
                ar
              </button>
            </div>
            {i18n.t("name")}
            <div>{i18n.t("desc")}</div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={(values)=>{
              this.handleSubmit(values)
            }}
          >
            {({ resetForm }) => (
              <Form>
                <div className="form-group">
                  <label>Full Name</label>
                  <Field name="fullname" type="text" className="form-control" />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div>
                  <Multiselect 
                    options={this.state.options} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username"> Username </label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"> Email </label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"> Password </label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword"> Confirm Password </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group form-check">
                  <Field
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I have read and agree to the Terms
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-warning float-right"
                  >
                    Reset
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Testsss);
