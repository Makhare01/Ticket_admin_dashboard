import React, { useEffect, useState } from "react";
import data from "../databases/sportEvents.js";

const EditSport = (props, match) => {
  useEffect(() => {
    console.log(props.match.params.id);
  });

  const d = data.filter((d) => d.EventId === props.match.params.id);
  console.log(d);

  const [allValues, setAllValues] = useState({
    titleGeo: d[0].titleGeo,
    titleEng: d[0].titleEng,
    titleRus: d[0].titleRus,
    photoSmall: d[0].photoSmall,
    photoMedium: d[0].photoMedium,
    photoBig: d[0].photoBig,
    sellDate: d[0].sellStartedAt,
    descriptionGeo: d[0].descriptionGeo,
    descriptionEng: d[0].descriptionEng,
    descriptionRus: d[0].descriptionRus,
    location: d[0].location,
    addressGeo: d[0].addressGeo,
    addressEng: d[0].addressEng,
    addressRus: d[0].addressRus,
    price: d[0].price,
  });

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const sportEvent = {
      titleGeo: allValues.titleGeo,
      titleEng: allValues.titleEng,
      titleRus: allValues.titleRus,
      photoSmall: allValues.photoSmall,
      photoMedium: allValues.photoMedium,
      photoBig: allValues.photoBig,
      sellDate: allValues.sellDate,
      descriptionGeo: allValues.descriptionGeo,
      descriptionEng: allValues.descriptionEng,
      descriptionRus: allValues.descriptionRus,
      location: allValues.location,
      addressGeo: allValues.addressGeo,
      addressEng: allValues.addressEng,
      addressRus: allValues.addressRus,
      price: allValues.price,
    };

    console.log(sportEvent);

    e.preventDefault();
    alert("წარმატებით დაემატა!");
    props.history.push("/admin/sport");
  };
  return (
    <div>
      <p className="admin-event-name">EDIT SPORT</p>

      <div className="add-sport-div">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">სათაური (ქართ)</label>
              <textarea
                className="form-control"
                value={allValues.titleGeo}
                name="titleGeo"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">სათაური (ინგ)</label>
              <textarea
                type="text"
                className="form-control"
                value={allValues.titleEng}
                name="titleEng"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">სათაური (რუს)</label>
              <textarea
                type="text"
                className="form-control"
                value={allValues.titleRus}
                name="titleRus"
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="form-outline col-lg-4 col-sm-12 mb-4">
              <label className="form-label">ფოტო (პარატა)</label>
              <input
                type="file"
                className="form-control"
                value={allValues.photoSmall}
                name="photoSmall"
                onChange={changeHandler}
                required
              />
            </div>

            <div className="form-outline col-lg-4 col-sm-12 mb-4">
              <label className="form-label">ფოტო (საშუალო)</label>
              <input
                type="file"
                className="form-control"
                value={allValues.photoMedium}
                name="photoMedium"
                onChange={changeHandler}
                required
              />
            </div>

            <div className="form-outline col-lg-4 col-sm-12 mb-4">
              <label className="form-label">ფოტო (დიდი)</label>
              <input
                type="file"
                className="form-control"
                value={allValues.photoBig}
                name="photoBig"
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">გაყიდვების დაწყების თარიღი</label>
            <input
              type="date"
              className="form-control"
              value={allValues.sellDate}
              name="sellDate"
              onChange={changeHandler}
              required
            />
          </div>

          <div className="row">
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">აღწერა (ქართ)</label>
              <textarea
                className="form-control"
                value={allValues.descriptionGeo}
                name="descriptionGeo"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">აღწერა (ინგ)</label>
              <textarea
                className="form-control"
                value={allValues.descriptionEng}
                name="descriptionEng"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">აღწერა (რუს)</label>
              <textarea
                className="form-control"
                value={allValues.descriptionRus}
                name="descriptionRus"
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">ადგილმდებარეობა</label>
            <input
              className="form-control"
              value={allValues.location}
              name="location"
              onChange={changeHandler}
              required
            />
          </div>

          <div className="row">
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">მისამართი (ქართ)</label>
              <select
                className="form-control"
                value={allValues.addressGeo}
                name="addressGeo"
                onChange={changeHandler}
                required
              >
                <option>{d[0].addressGeo}</option>
                <option value="ბათუმი">ბათუმი</option>
                <option value="თბილისი">თბილისი</option>
                <option value="ქუთაისი">ქუთაისი</option>
              </select>
            </div>
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">მისამართი (ინგ)</label>
              <select
                className="form-control"
                value={allValues.addressEng}
                name="addressEng"
                onChange={changeHandler}
                required
              >
                <option>{d[0].addressEng}</option>
                <option value="Batumi">Batumi</option>
                <option value="Tbilisi">Tbilisi</option>
                <option value="Kutaisi">Kutaisi</option>
              </select>
            </div>
            <div className="form-outline col-lg-4 col-sm-12  mb-4">
              <label className="form-label">მისამართი (რუს)</label>
              <select
                className="form-control"
                value={allValues.addressRus}
                name="addressRus"
                onChange={changeHandler}
                required
              >
                <option>{d[0].addressRus}</option>
                <option value="Батуми">Батуми</option>
                <option value="Тбилиси">Тбилиси</option>
                <option value="Кутаиси">Кутаиси</option>
              </select>
            </div>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">ფასი</label>
            <input
              type="text"
              className="form-control"
              value={allValues.price}
              name="price"
              onChange={changeHandler}
              required
            />
          </div>

          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              style={{ width: "200px" }}
            >
              დამატება
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSport;
