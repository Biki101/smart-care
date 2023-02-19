import React from "react";

const ProductDescription = () => {
  return (
    <div>
      <h1 className="text-[23px] text-[#505056] leading-[32.89px] font-bold tracking-[0.01em]">
        {/* {productDescription?.title} */}
      </h1>
      <p className="mt-[30px] text-[16px] text-[#000000d8] ">
        {/* In the present era, almost every house has a microwave.
    Microwave Oven not only provides a different way of cooking, but
    it also brings out people's inner chefs. It uses microwave
    radiation to cause atomic movement in water, fat, sugar
    molecules, etc. to cook the food. That’s why it is faster than
    normal cooking. But Servicing and repairing a microwave oven
    might be a headache, especially if you work on a busy schedule.
    Finding microwave repair experts is indeed difficult and
    time-consuming. We don't want you or your everyday routines to
    suffer because of a faulty microwave. */}
        {/* {productDescription?.description} */}
      </p>
      <p className="text-[16px] text-[#000000d8] mt-[20px]">
        Thus, we at Smart Care Service are here to provide microwave repair and
        services that you can order online at any time and from anywhere.
      </p>
      <div className="mt-[20px]">
        <h2 className="text-[16px] text-[#505056] leading-[32.89px] font-bold tracking-[0.01em]">
          {" "}
          {/* {`Types Of ${activeSubCategory} We Repair`} */}
        </h2>
        <p className="text-[16px] text-[#000000d8]">
          {/* {`We offer ${productDescription?.title} Repair and Services for the following
      types:`} */}
        </p>
        {/* <ul>
          {productCategoriesList?.map((items: any, index: any) => (
            <li key={index} className="text-[16px] text-[#000000d8]">
              {" "}
              {`- ${items?.text}`}
            </li>
          ))}
        </ul> */}
      </div>
      <div className="pt-[20px]">
        <h2 className="text-[#2591B2] text-[23px] leading-[22.88px] tracking-[0.01em] font-bold">
          Our Services
        </h2>
        <p className="mt-[15px] text-[15px] text-[#505056]">
          {" "}
          {/* {`Our ${productDescription?.title} Repair and Services Include:`} */}
        </p>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Dead/No On
          </h2>
          <p className="text-[16px] text-[#000000d8]">
            {" "}
            If your microwave oven does not turn on, it could be due to a
            connection fault, which you can resolve by simply disconnecting and
            replugging. If this does not fix your issue then something serious
            has happened as the fuse has blown. You can reach out to Smartcare
            Repair and Services for assistance.{" "}
          </p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Keys not Working:
          </h2>
          <p className="text-[16px] text-[#000000d8]">
            The unresponsiveness of the keys(button) can be due to a variety of
            reasons ranging from loose panel connection to damaged switch
            membrane and control board. If you observe these kinds of problems,
            you can contact us at Smart Care Repair and Services to solve the
            problem for you.
          </p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Visible sparks inside Microwave oven:
          </h2>
          <p className="text-[16px] text-[#000000d8]">
            {" "}
            If you can see visible sparks inside the microwave oven during its
            operation, you have to cut its power off immediately. The cause of
            visible sparks can be due to waveguide cover damage, burned diode
            out, or other issues. These kinds of issues should be handled by
            only professionals. Smartcare Repair And Services have experienced
            technicians to solve such problems for you.
          </p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Less/No Heating{" "}
          </h2>
          <p className="text-[16px] text-[#000000d8]">
            The microwave oven seems operating but is not producing enough heat
            to warm up food. This might be because of damage to the heating
            component. You can call Smartcare Repair and Services to fix such
            issues.
          </p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Switching on/off by itself:
          </h2>
          <p className="text-[16px] text-[#000000d8]">
            {" "}
            Sometimes microwave oven operates independently by switching the
            on/off button by itself. This is caused by various reasons like a
            defect in the diode (Triac), improper functioning of the control
            panel, or if the switch gets stuck. You can give us a call at
            Smartcare Repair and services to fix your problem for you.
          </p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Other repairs:
          </h2>
          <p className="text-[16px] text-[#000000d8]">
            If you are observing other problems that are not mentioned above
            like, microwave door not opening, microwave oven suddenly stops
            while heating, or any other issue, you can contact Smartcare Repair
            and Services to solve it for you.
          </p>
        </div>
        <div>
          <h2 className="text-[16px] font-semibold text-[#505056] mt-[20px]">
            Popular Brands Microwave Oven We Repair{" "}
          </h2>
          <ul className="text-[16px] text-[#000000d8]">
            <li className="text-[16px] text-[#000000d8]">- LG </li>
            <li className="text-[16px] text-[#000000d8]">- SAMSUNG</li>
            <li className="text-[16px] text-[#000000d8]">- WHIRLPOOL</li>
            <li className="text-[16px] text-[#000000d8]">- IFB </li>
            <li className="text-[16px] text-[#000000d8]">- ELECTROLUX</li>
            <li className="text-[16px] text-[#000000d8]"> - SKYWORTH</li>
            <li className="text-[16px] text-[#000000d8]">- HISENSE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
