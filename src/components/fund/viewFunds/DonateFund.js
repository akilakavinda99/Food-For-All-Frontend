import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { donateFund } from "../../../api/fund.api";
import { getCookie } from "../../common/getCookie";
import { cardValidation } from "../cardValidation";

export default function DonateFund({ organizationID, fundID, fund }) {
  const [formErrors, setFormErrors] = useState({});
  const [cardDetails, setCardDetails] = useState({});
  const [donationAmount, setDonationAmount] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleDonation = (e) => {
    e.preventDefault();
    // console.log(cardDetails);
    setFormErrors(cardValidation(cardDetails));
    if (donationAmount <= 0 || donationAmount === undefined) {
      setFormErrors({
        ...formErrors,
        donationAmount: "Donation amount must be greater than 0",
      });
    } else if (donationAmount > fund.budget - fund.currentAmount) {
      setFormErrors({
        ...formErrors,
        donationAmount: "Donation amount must be less than the remaining budget",
      });
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log("Donation successful");
      donateFund(fundID, {
        userID: getCookie("uId"),
        fundID: fundID,
        amount: donationAmount,
        organizationID: organizationID,
      })
        .then((res) => {
          setCardDetails({});
          setDonationAmount();
          swal("Donation Successful", "", "success")
            .then((willLogin) => {
              if (willLogin) {
                window.location.reload();
              }
            });
        })
        .catch((err) => {
          console.log(err);
          swal("Donation Failed", "", "error");
        });
    } else {
      setIsSubmit(false);
    }
  }, [formErrors, isSubmit]);

  return (
    <div>
      <form className="text-start">
        <label className="form-label">Amount (Rs.)</label>
        <div className="input-group input-group-outline mb-1">
          <input
            type="number"
            className="form-control"
            placeholder="9999"
            value={donationAmount}
            onChange={(e) => {
              setDonationAmount(e.target.value);
            }}
          />
        </div>
        <div className="text-danger form-label mb-3">
          {formErrors.donationAmount}
        </div>

        <h5 className="form-group text-center pt-2">Card Details</h5>

        <label className="form-label">Name on Card</label>
        <div className="input-group input-group-outline mb-1">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. John E Cash"
            value={cardDetails["name"]}
            onChange={(e) => {
              setCardDetails({ ...cardDetails, name: e.target.value });
            }}
          />
        </div>
        <div className="text-danger form-label mb-3">{formErrors.name}</div>

        <label className="form-label">Card Number</label>
        <div className="input-group input-group-outline mb-1">
          <input
            type="text"
            className="form-control"
            placeholder="16-digit card number"
            value={cardDetails["cardNumber"]}
            onChange={(e) => {
              setCardDetails({ ...cardDetails, cardNumber: e.target.value });
            }}
          />
        </div>
        <div className="text-danger form-label mb-3">
          {formErrors.cardNumber}
        </div>

        <div className="row">
          <div className="col-6">
            <label className="form-label">Card Expiry</label>
            <div className="input-group input-group-outline mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="MM / YY"
                value={cardDetails["cardExpiry"]}
                onChange={(e) => {
                  setCardDetails({
                    ...cardDetails,
                    cardExpiry: e.target.value,
                  });
                }}
              />
            </div>
            <div className="text-danger form-label mb-3">
              {formErrors.cardExpiry}
            </div>
          </div>

          <div className="col-6">
            <label className="form-label">CVV</label>
            <div className="input-group input-group-outline mb-1">
              <input
                type="password"
                className="form-control"
                placeholder="***"
                value={cardDetails["cvv"]}
                onChange={(e) => {
                  setCardDetails({ ...cardDetails, cvv: e.target.value });
                }}
              />
            </div>
            <div className="text-danger form-label mb-3">{formErrors.cvv}</div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <button
              type="button"
              onClick={handleDonation}
              className="btn bg-gradient-primary w-100 my-4 mb-2"
            >
              Donate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
