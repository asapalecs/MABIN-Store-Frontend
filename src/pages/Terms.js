import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Terms = () => {
  return (
    <>
      <Meta title={"Mabin | Termeni și condiții"} />
      <BreadCrumb title="Termeni și condiții" />
      <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
