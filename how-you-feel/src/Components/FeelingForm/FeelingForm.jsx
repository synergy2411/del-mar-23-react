import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "../../UI/Alert/Alert";

const FeelingForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { token } = useSelector((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/auth");
    }
  }, [token, navigate]);

  const submitHandler = (ev) => {
    ev.preventDefault();
    setShowAlert(true);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-8 offset-2">
          <div className="card mt-3">
            <div className="card-header">
              <h4 className="text-center">Good Vibes Form</h4>
            </div>
            <div className="card-body">
              <h6 className="text-center mb-4">
                Tell us something that happened to you today
              </h6>
              <form onSubmit={submitHandler}>
                {/* first */}
                <div className="row mb-4">
                  <div className="col-6">
                    <label htmlFor="">
                      On scale of 1-10, how good was it?{" "}
                    </label>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                    />
                  </div>
                </div>
                {/* second */}
                <div className="row mb-4">
                  <div className="col-6 mb-4">
                    <p>Where did it happened ?</p>
                  </div>
                  <div className="col-6">
                    <select className="form-control form-control-sm">
                      <option value="home">At Home</option>
                      <option value="home">At Work</option>
                      <option value="home">At Market</option>
                      <option value="home">At School</option>
                    </select>
                  </div>
                </div>
                {/* third */}
                <div className="row mb-4">
                  <div className="col-6">
                    <p>At what time of day, did it happen ?</p>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feeling"
                        id="morning"
                      />
                      <label className="form-check-label" htmlFor="morning">
                        Morning
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feeling"
                        id="noon"
                      />
                      <label className="form-check-label" htmlFor="noon">
                        Afternoon
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="feeling"
                        id="evening"
                      />
                      <label className="form-check-label" htmlFor="evening">
                        Evening
                      </label>
                    </div>
                  </div>
                </div>
                {/* fourth */}
                <div className="row mb-4">
                  <div className="col-6">
                    <p>Which emotion did you experience? </p>
                  </div>
                  <div className="col-6">
                    <div className="list-group">
                      <label className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                        />
                        Exicted
                      </label>
                      <label className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                        />
                        Humbled
                      </label>
                      <label className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                        />
                        Elated
                      </label>
                      <label className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                        />
                        Loved
                      </label>
                      <label className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          value=""
                        />
                        Enthusiastic
                      </label>
                    </div>
                  </div>
                </div>
                {/* fifth */}
                <div className="row mb-4">
                  <div className="col-6">
                    <p>Please describe your positive experience</p>
                  </div>
                  <div className="col-6">
                    <textarea
                      className="form-control form-control-sm"
                      placeholder="enter your experience here"
                    />
                  </div>
                </div>
                {/* button */}
                <div className="row">
                  <div className="col-4 offset-4">
                    <div className="d-grid">
                      <button className="btn btn-secondary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showAlert && <Alert />}
    </Fragment>
  );
};

export default FeelingForm;
