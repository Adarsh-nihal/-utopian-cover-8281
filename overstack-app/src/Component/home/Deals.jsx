<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11

export const Deals = ({ offers }) => {
    return (
      <div className="container-fluid universalSpacingX">
        <div className="row">
          <div className="col limitedtimeDiv">
            <div className="limitedtimeHeadingDiv">
              <h2 className="limitedtimeHeading">Limited-Time Deals</h2>
            </div>
          </div>
        </div>
  
        <div className="row universalSpacing">
          <div className="col">
            <div className="offerContainer">
              {offers.map((items) => {
                return (
                  <div className="offerCard">
                    <a
                      href="category.html"
                      className="offerCardLink"
                      onclick="page(`Rugs`)"
                    >
                      <div className="offerCardImgDiv">
                        <img
                          style={{ backgroundColor: "#FEF8E8" }}
                          className="offerCardImg"
                          src={items.src}
                          alt=""
                        />
                      </div>
                      <div className="offerCardTitleDiv">
                        <h3 className="title-xs offerCardTitle">{items.title}</h3>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
<<<<<<< HEAD
  };
=======
export const Deals = ({ offers }) => {
  return (
    <div className="container-fluid universalSpacingX">
      <div className="row">
        <div className="col limitedtimeDiv">
          <div className="limitedtimeHeadingDiv">
            <h2 className="limitedtimeHeading">Limited-Time Deals</h2>
          </div>
        </div>
      </div>

      <div className="row universalSpacing">
        <div className="col">
          <div className="offerContainer">
            {offers.map((items) => {
              return (
                <div className="offerCard">
                  <a
                    href="category.html"
                    className="offerCardLink"
                    onclick="page(`Rugs`)"
                  >
                    <div className="offerCardImgDiv">
                      <img
                        style={{ backgroundColor: "#FEF8E8" }}
                        className="offerCardImg"
                        src={items.src}
                        alt=""
                      />
                    </div>
                    <div className="offerCardTitleDiv">
                      <h3 className="title-xs offerCardTitle">{items.title}</h3>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
>>>>>>> 8c9b4b28da9103492cf67c43599ff6aebd69da3d
=======
  };
>>>>>>> 88f3bfadf5b1733b468b6c5e7aa211fe166d4a11
